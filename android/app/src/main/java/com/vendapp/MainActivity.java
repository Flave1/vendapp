import android.os.Bundle;
package com.vendapp;
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "vendapp";
  }

    
    @Override
    protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(null);
    }
}
