import 'package:flutter/material.dart';

void main() => runApp(CalculatorApp());

class CalculatorApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Calculator',
      theme: ThemeData(primarySwatch: Colors.blue),
      home: CalculatorHome(),
    );
  }
}

class CalculatorHome extends StatefulWidget {
  @override
  _CalculatorHomeState createState() => _CalculatorHomeState();
}

class _CalculatorHomeState extends State<CalculatorHome> {
  String output = "0";
  String _output = "0";
  double num1 = 0;
  double num2 = 0;
  String operand = "";

  buttonPressed(String buttonText) {
    if (buttonText == "C") {
      _output = "0";
      num1 = 0;
      num2 = 0;
      operand = "";
    } else if (buttonText == "+" || buttonText == "-" || buttonText == "×" || buttonText == "÷") {
      num1 = double.parse(output);
      operand = buttonText;
      _output = "0";
    } else if (buttonText == ".") {
      if (!_output.contains(".")) {
        _output += buttonText;
      }
    } else if (buttonText == "=") {
      num2 = double.parse(output);
      if (operand == "+") _output = (num1 + num2).toString();
      if (operand == "-") _output = (num1 - num2).toString();
      if (operand == "×") _output = (num1 * num2).toString();
      if (operand == "÷") _output = (num1 / num2).toString();
      num1 = 0;
      num2 = 0;
      operand = "";
    } else {
      _output += buttonText;
    }

    setState(() {
      output = double.parse(_output).toStringAsFixed(2);
    });
  }

  Widget buildButton(String buttonText) {
    return Expanded(
      child: OutlinedButton(
        child: Text(buttonText, style: TextStyle(fontSize: 25.0)),
        onPressed: () => buttonPressed(buttonText),
        style: OutlinedButton.styleFrom(
          padding: EdgeInsets.all(25.0),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Calculator')),
      body: Column(
        children: <Widget>[
          Container(
            alignment: Alignment.centerRight,
            padding: EdgeInsets.symmetric(vertical: 24, horizontal: 12),
            child: Text(output, style: TextStyle(fontSize: 48, fontWeight: FontWeight.bold)),
          ),
          Expanded(child: Divider()),
          Column(children: [
            Row(children: [buildButton("7"), buildButton("8"), buildButton("9"), buildButton("÷")]),
            Row(children: [buildButton("4"), buildButton("5"), buildButton("6"), buildButton("×")]),
            Row(children: [buildButton("1"), buildButton("2"), buildButton("3"), buildButton("-")]),
            Row(children: [buildButton("."), buildButton("0"), buildButton("00"), buildButton("+")]),
            Row(children: [buildButton("C"), buildButton("=")]),
          ])
        ],
      ),
    );
  }
}