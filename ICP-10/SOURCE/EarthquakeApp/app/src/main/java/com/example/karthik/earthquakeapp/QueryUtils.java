package com.example.karthik.earthquakeapp;

import android.util.Log;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by karthik on 11/3/17.
 */

public class QueryUtils {

    /** Tag for the log messages */
    private static final String LOG_TAG = QueryUtils.class.getSimpleName();

    /**
     * Create a private constructor because no one should ever create a {@link QueryUtils} object.
     * This class is only meant to hold static variables and methods, which can be accessed
     * directly from the class name QueryUtils (and an object instance of QueryUtils is not needed).
     */
    private QueryUtils() {
    }

    /**
     * Query the USGS dataset and return a list of {@link Earthquake} objects.
     */
    public static List<Earthquake> fetchEarthquakeData2(String requestUrl) {
        // An empty ArrayList that we can start adding earthquakes to
        List<Earthquake> earthquakes = new ArrayList<>();
        //  URL object to store the url for a given string
        URL url = null;
        // A string to store the response obtained from rest call in the form of string
        String jsonResponse = "";
        //String jsonResponse = "";
        StringBuilder stringBuilder = new StringBuilder();
        BufferedReader bufferedReader;
        URLConnection urlConnection;
        try {
                //TODO: 1. Create a URL from the requestUrl string and make a GET request to it
                //TODO: 2. Read from the Url Connection and store it as a string(jsonResponse)
                /*TODO: 3. Parse the jsonResponse string obtained in step 2 above into JSONObject to extract the values of
                        "mag","place","time","url"for every earth quake and create corresponding Earthquake objects with them
                        Add each earthquake object to the list(earthquakes) and return it.
                */


                //Log.d()

            url = new URL(requestUrl);
            urlConnection = url.openConnection();

            bufferedReader = new BufferedReader(new InputStreamReader(urlConnection.getInputStream()));

            String line;
            while ((line = bufferedReader.readLine()) !=  null) {
                // Appending the Line to StringBuilder
                stringBuilder.append(line);
            }

            if(bufferedReader != null){
                bufferedReader.close();
            }
            jsonResponse = stringBuilder.toString();
            JSONObject jsonObject = new JSONObject(jsonResponse);
            JSONArray jsonArray = (JSONArray) jsonObject.get("features");

            for(int i =0;i < jsonArray.length(); i++){
                // Getting json Object 'properties'
                JSONObject json = jsonArray.getJSONObject(i).getJSONObject("properties");
                System.out.println(json);
                // Passing Data to Constructor
                double mag=(double) json.get("mag");
                //int mag=(int) json.get("mag");
                String place = (String)json.get("place");
                long time=(long)json.get("time");
                String ur=(String)json.get("url");

                Earthquake earthquake = new Earthquake(mag,place,time,ur);
                // Adding each 'EarthQuake' Object to List created.
                earthquakes.add(earthquake);
            }
            Log.d("list",earthquakes.toString());

            return earthquakes;
            // Return the list of earthquakes

        } catch (Exception e) {
            Log.e(LOG_TAG, "Exception:  ", e);
        }
        // Return the list of earthquakes
        return earthquakes;
    }



}
