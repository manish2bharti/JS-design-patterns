# JS Design Patterns
Design Patterns can help us write more efficient, maintainable and clearer code. They're time tested solutions to common problems in software design.


**Factory Pattern:**
The factory pattern wraps a constructor for different types of objects and returns instances of the objects via a simple API. It makes it easy to create different objects by exposing a simple API that return the specified object type.

**The Factory Method pattern is generally used in the following situations:**
A class cannot anticipate the type of objects it needs to create beforehand.
A class requires its subclasses to specify the objects it creates.
You want to localize the logic to instantiate a complex object.

**Singleton Pattern:**
Singleton desing pattern limits the number of instances of a particular object to just one the single instance is called the singleton. This is useful when exactly one object is needed to coordinate action across the system you use a singleton as the source of config settings for a web app or on the client side for aything initiated with an API key Singleton also serve as a shared resource namespace which isolate implementation code from the global namespace so as to provide a single point of access for funtions namespace in your code is a primary use of singletons a well known use case for this JQuery
