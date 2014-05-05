package com.dckea.android;

import java.util.concurrent.ExecutionException;

import roboguice.activity.RoboActivity;
import roboguice.inject.ContentView;
import android.content.Intent;
import android.os.Bundle;
import android.view.Menu;
import android.view.View;
import android.widget.EditText;

import com.dckea.android.user.task.impl.LoginTask;
import com.dckea.common.domain.dto.AuthTokenEntity;
import com.dckea.common.domain.rest.RestResult;
import com.google.inject.Inject;
import com.google.inject.Provider;

@ContentView(R.layout.activity_login)
public class LoginActivity extends RoboActivity {

	@Inject
	Provider<LoginTask> getLoginTaskProvider;
	
//	@Inject
//	Provider<AddToCartTask> getAddToCartTaskProvider;
	
    @Override
    public void onCreate(Bundle savedInstanceState) {
    	super.onCreate(savedInstanceState);

//    	try {
//    		String oauthToken = "a9f66a3c-8cb0-4410-b421-df08d7b4e980";
//    		String itemId = "gjswmnbymy3tizjvgi3tqobzmjqtamjthbrdmolchfrweztemq4tsodghftgezbw";
//    		
//    		getAddToCartTaskProvider.get()
//    		.execute(oauthToken, itemId)
//    		.get();
//    			
////    		RestResult<AuthTokenEntity> restResult = getLoginTaskProvider.get()
////    		.execute("", "")
////    		.get();
//    		
////    		ItemDetailsEntity loginresult = getItemTaskProvider.get()
////    		.execute("/items/ikea/gi3ggmdegjrwmyjwmu4demtfmzrtgzrumfqwkmbzgqzdkmjsmnrtmmjygfrgezld", "definition")
////    		.get();
//    		
////    		System.out.println("Here");
//    	} catch (InterruptedException e) {
//    		// TODO Auto-generated catch block
//    		e.printStackTrace();
//    	} catch (ExecutionException e) {
//    		// TODO Auto-generated catch block
//    		e.printStackTrace();
//    	}
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.activity_login, menu);
        return true;
    }
    
    public void login(View view) {
    	
    	
    	EditText unameBox = (EditText)findViewById(R.id.editText1);
    	String userName = unameBox.getText().toString();
    	
    	EditText passwordBox = (EditText)findViewById(R.id.editText2);
    	String password = passwordBox.getText().toString();
    	
    	String oauthToken = "";
    	
    	try {
    		RestResult<AuthTokenEntity> restResult = getLoginTaskProvider.get()
    		.execute(userName, password)
    		.get();
    		
    		oauthToken = restResult.getRestResult().getAccessToken();
    		
    	} catch (InterruptedException e) {
    		// TODO Auto-generated catch block
    		e.printStackTrace();
    	} catch (ExecutionException e) {
    		// TODO Auto-generated catch block
    		e.printStackTrace();
    	}
    	
    	Intent intent = new Intent(this, NfcReaderActivity.class);
    	intent.putExtra("oauthToken", oauthToken);
    	startActivity(intent);
    }

}
