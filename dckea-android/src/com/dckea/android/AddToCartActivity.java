package com.dckea.android;

import java.util.concurrent.ExecutionException;

import roboguice.activity.RoboActivity;
import roboguice.inject.ContentView;
import android.content.Intent;
import android.os.Bundle;
import android.view.Menu;
import android.view.View;

import com.dckea.android.item.task.impl.AddToCartTask;
import com.google.inject.Inject;
import com.google.inject.Provider;

@ContentView(R.layout.activity_add_to_cart)
public class AddToCartActivity extends RoboActivity {

	@Inject
	Provider<AddToCartTask> getAddToCartTaskProvider;
	
	private String oauthToken;
	
	private String itemUri;
	
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        
        itemUri = (String) getIntent().getExtras().get("itemUri");
        oauthToken = (String) getIntent().getExtras().get("oauthToken");
        addToCart();
    }
    
    public void addToCart() {
    	try {
	    	getAddToCartTaskProvider.get()
	    		.execute(oauthToken, itemUri)
	    		.get();
    	} catch (InterruptedException e) {
    		// TODO Auto-generated catch block
    		e.printStackTrace();
    	} catch (ExecutionException e) {
    		// TODO Auto-generated catch block
    		e.printStackTrace();
    	}
    }
    
    public void scanOther(View view) {
    	Intent intent = new Intent(this, NfcReaderActivity.class);
    	intent.putExtra("oauthToken", oauthToken);
    	startActivity(intent);
    }
    
    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.activity_add_to_cart, menu);
        return true;
    }


}
