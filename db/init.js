const result = db.collection("users").insertOne({ firstName: "John", lastName: "John", email: "tom1@tom.pl", password: "$2b$10$940vnExeWr3u74df1MmMRe3pbX39LAoNwG1tKoBcDtpUT3ZIjqr0a" });
if (result.insertedId) {
    print("Document inserted successfully!");
  } else {
    print("Failed to insert documaent.");
  }