package com.dckea.android;

import java.util.concurrent.ExecutionException;

import roboguice.activity.RoboActivity;
import roboguice.inject.ContentView;
import android.content.Intent;
import android.os.Bundle;
import android.view.Menu;
import android.view.View;

import com.dckea.android.item.task.impl.CheckoutTask;
import com.google.inject.Inject;
import com.google.inject.Provider;

@ContentView(R.layout.activity_checkout)
public class CheckoutActivity extends RoboActivity {

	private String checkoutUri;
	private String oauthToken;
	
	@Inject
	Provider<CheckoutTask> getCheckoutActivityProvider;
	
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        oauthToken = (String) getIntent().getExtras().get("oauthToken");
        checkoutUri = (String) getIntent().getExtras().get("checkoutUri");
        
        try {
			getCheckoutActivityProvider.get()
				.execute(oauthToken, checkoutUri)
				.get();
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ExecutionException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    }
    
    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.activity_checkout, menu);
        return true;
    }
    
    public void shopAgain(View view) {
    	Intent intent = new Intent(this, LoginActivity.class);
    	startActivity(intent);
    }
}
