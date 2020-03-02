# ASSESSMENT 4: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.  

1. What is an instance variable in Ruby? How is it different from other variables?

 Your answer: Instance variable is a variable that stores information within a class. It is different from other variables 
  in that it starts with a "@".

  Researched answer:An instance variable has a name beginning with @, and its scope is confined to whatever 
  object self refers to. Two different objects, even if they belong to the same class, are allowed to have different values for their instance variables. 
  From outside the object, instance variables cannot be altered or even observed (i.e., ruby's instance variables are never public) 
  except by whatever methods are explicitly provided by the programmer. 
  You can't just access an instance variable from outside of an object, as you can with variables in JavaScript. 
  Think local scope.



2. What is a block in Ruby?

  Your answer: It starts with a "do" and ends with an "end"

  Researched answer:Ruby blocks are little anonymous functions that can be passed into methods. Blocks are enclosed in a
  do / end statement or between brackets {}, and they can have multiple arguments.The argument names are defined between 
  two pipe | characters. A Ruby block is useful because it allows you to save a bit of logic (code) & use it later.
  This could be something like writing data to a file, comparing if one element is equal to another, or even printing an
  error message.



3. Ruby has an implicit return. What does that mean?

  Your answer: No need to use "return" the same way as in JavaScript?

  Researched answer: Ruby has an implicit return, which means the value of the last line of a method is automatically
  returned without using the keyword return.



4. What is object-oriented programming? How is it different than functional programming?

   Your answer: A way of running programs by using objects, which are the intersection of behabior and data.

  Researched answer:n OOP, we identify the “things” that our program handles. As humans, we think about things as 
  objects with attributes and behaviors, and we interact with things based on these attributes and behaviors. A thing can be
  a car, a book, and so on. Such things become classes (the blueprints of objects), and we create objects out of these
  classes.

  Functional Programming is the technique of programming that stress on an evaluation of functions and developing the 
  structure and elements of computer programs. Functional programming does not work on executing commands or statements 
  rather it evaluates expressions.



5. What is the difference between a class and an object?

  Your answer: Class is a collection of objects?

  Researched answer: A class is a blueprint from which objects are created. The object is also called as an instance of a 
  class. For Example, the animal is a class and mammals, birds, fish, reptiles, and amphibians are the instances of the
  class. Similarly, the sales department is the class and the objects of the class are sales data, sales manager, and
  secretary.

