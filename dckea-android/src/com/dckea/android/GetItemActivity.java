package com.dckea.android;

import java.io.BufferedInputStream;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;

import roboguice.activity.RoboActivity;
import roboguice.inject.ContentView;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.net.Uri;
import android.os.AsyncTask;
import android.os.Bundle;
import android.view.Menu;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;

import com.dckea.android.item.task.impl.GetItemTask;
import com.dckea.common.domain.dto.ItemDetailsEntity;
import com.google.inject.Inject;
import com.google.inject.Provider;

@ContentView(R.layout.activity_get_item)
public class GetItemActivity extends RoboActivity {

	private String itemUri;

	private String oauthToken;

	@Inject
	Provider<GetItemTask> getGetItemTaskProvider;

	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		// setContentView(R.layout.activity_get_item);

		itemUri = (String) getIntent().getExtras().get("itemUri");
		oauthToken = (String) getIntent().getExtras().get("oauthToken");

		BufferedInputStream bis = null;
		
		try {

			ItemDetailsEntity itemResult = getGetItemTaskProvider.get()
					.execute(itemUri, "definition,definition:assets:element,price").get();

			TextView displayNameTextView = (TextView) findViewById(R.id.itemDisplayName);
			TextView descriptionTextView = (TextView) findViewById(R.id.itemDescription);
			TextView priceView = (TextView) findViewById(R.id.itemPrice);
			ImageView imageView = (ImageView) findViewById(R.id.itemImage);

			displayNameTextView.setText(itemResult.getDisplayName());
			descriptionTextView.setText(itemResult.getDescription());
			priceView.setText(itemResult.getPrice());

			String imageUrl = itemResult.getAssertUri();
			Bitmap imageBitmap;
			try {
				imageBitmap = new ImageFetcherTask().execute(imageUrl, "", "").get(5, TimeUnit.SECONDS);
				if (imageBitmap == null) {
					imageView.setImageResource(R.drawable.image_timeout);
				}
				imageView.setImageBitmap(imageBitmap);
			} catch (TimeoutException e) {
				imageView.setImageResource(R.drawable.image_timeout);
				e.printStackTrace();
			}

		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ExecutionException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			if (bis != null) {
				try {
					bis.close();
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}
	}

	@Override
	protected void onResume() {
		super.onResume();
		itemUri = (String) getIntent().getExtras().get("itemUri");
		oauthToken = (String) getIntent().getExtras().get("oauthToken");
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		getMenuInflater().inflate(R.menu.activity_get_item, menu);
		return true;
	}

	public void addToCart(View view) {
		Intent intent = new Intent(this, AddToCartActivity.class);
		intent.putExtra("oauthToken", oauthToken);
		intent.putExtra("itemUri", itemUri);
		startActivity(intent);
	}
	
	private class ImageFetcherTask extends AsyncTask<String, String, Bitmap> {
		
		@Override
		protected Bitmap doInBackground(String... params) {
			URLConnection conn = null;
			BufferedInputStream bis = null;
			try {
				conn = new URL(params[0]).openConnection();
				conn.connect();
				bis = new BufferedInputStream(conn.getInputStream());
				return BitmapFactory.decodeStream(bis);
			} catch (MalformedURLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				return null;
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				return null;
			} finally {
				if (bis != null) {
					try {
						bis.close();
					} catch (IOException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
				}
			}
		}
	}
}
