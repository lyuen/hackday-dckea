package com.dckea.android;

import android.app.Activity;
import android.app.PendingIntent;
import android.content.Intent;
import android.nfc.NdefMessage;
import android.nfc.NfcAdapter;
import android.os.Bundle;
import android.os.Parcelable;
import android.view.Menu;
import android.widget.Toast;

public class NfcReaderActivity extends Activity {

	private NfcAdapter nfcAdapter;
	private PendingIntent pendingIntent;
	private String oauthToken;
	
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_nfc_reader);
        oauthToken = (String) getIntent().getExtras().get("oauthToken");
        nfcAdapter = NfcAdapter.getDefaultAdapter(this);
        pendingIntent = PendingIntent.getActivity(
        		  this, 0, new Intent(this, getClass()).addFlags(Intent.FLAG_ACTIVITY_SINGLE_TOP), 0);
        if (nfcAdapter == null) {
            Toast.makeText(this, "NFC is not available", Toast.LENGTH_LONG).show();
            finish();
            return;
        }
    }
    
    @Override
    protected void onNewIntent(Intent intent) {
    	super.onNewIntent(intent);
    	processIntent(intent);
    }

    @Override
    protected void onResume() {
    	super.onResume();
    	nfcAdapter.enableForegroundDispatch(this, pendingIntent, null, null);
    	//processIntent(this.getIntent());
    }
    
    @Override
    protected void onPause() {
    	super.onPause();
    	nfcAdapter.disableForegroundDispatch(this);
    }
    
    void processIntent(Intent intent) {
    	if (intent != null && NfcAdapter.ACTION_NDEF_DISCOVERED.equals(intent.getAction())) {
    		Parcelable[] rawMsgs = intent.getParcelableArrayExtra(
	                NfcAdapter.EXTRA_NDEF_MESSAGES);
    		
    		NdefMessage msg = (NdefMessage) rawMsgs[0];
    		String message = new String(msg.getRecords()[0].getPayload());
    		String uri = message.substring(3);
    		uri.isEmpty();
    		
    		if (uri.contains("items")) {
	    		Intent itemIntent = new Intent(this, GetItemActivity.class);
	    		itemIntent.putExtra("oauthToken", oauthToken);
	    		itemIntent.putExtra("itemUri", uri);
	        	startActivity(itemIntent);
    		} else if (uri.contains("checkout")) {
    	    	Intent checkoutIntent = new Intent(this, CheckoutActivity.class);
    	    	checkoutIntent.putExtra("oauthToken", oauthToken);
    	    	checkoutIntent.putExtra("checkoutUri", uri);
    	        startActivity(checkoutIntent);
    		}
    	}
    }
    
    
    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.activity_nfc_reader, menu);
        return true;
    }
}
