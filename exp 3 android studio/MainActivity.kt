package com.example.counterapp

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.counterapp.ui.theme.CounterAppTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            CounterAppTheme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    CounterScreen()
                }
            }
        }
    }
}

@Composable
fun CounterScreen() {
    // State variable for the counter
    var count by remember { mutableStateOf(0) }

    // Layout
    Column(
        modifier = Modifier.fillMaxSize(),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        // Display counter
        Text(text = "Counter: $count", fontSize = 32.sp)

        Spacer(modifier = Modifier.height(20.dp))

        // Buttons row
        Row {
            // Increment button
            Button(onClick = { count++ }, modifier = Modifier.padding(8.dp)) {
                Text("Increment")
            }

            // Decrement button
            Button(onClick = { if (count > 0) count-- }, modifier = Modifier.padding(8.dp)) {
                Text("Decrement")
            }
        }
    }
}
