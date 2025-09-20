void main() {
  // ===== INPUT (simulated) =====
  // Here the program "asks" the user, but since we cannot type input
  // in your online platform, we assign a value directly.
  print("Enter a number:");
  int number = 5;   // <-- pretend the user entered 5

  // ===== OUTPUT =====
  print("You entered: $number");

  // ===== LOOP =====
  print("Counting from 1 to $number:");
  for (int i = 1; i <= number; i++) {
    print(i);
  }
}
