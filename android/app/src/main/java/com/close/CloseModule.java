package com.close;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import android.util.Log;
import com.facebook.react.bridge.Callback;


public class CloseModule extends  ReactContextBaseJavaModule{
    CloseModule(ReactApplicationContext context){
        super(context);
    }
    public String getName(){
        return "Close";
    }
    @ReactMethod
    public String closeApplication(){
        return "Close this application";
    }

    @ReactMethod
    public void sayClose(String name , Callback cb){
        try{
            String hello = "Hello there " + name;
            cb.invoke(null , hello);
        } catch (Exception er){
            cb.invoke(er , null);
        }
    }

    @ReactMethod
    public void closeApp(){
        getCurrentActivity().finish();
    }
}