---
title: Records and Structs in C#
description: Understand the difference between records and structs in C# and when to use each.
authors:
  - name: Teshane Crawford
    picture: https://github.com/TeshaneCrawford.png
    twitter: _d_shybrid
tags:
  - C#
  - dotnet
date: 2023-08-15T00:00:00.000Z
---

## Understanding the Difference Between Records and Structs in C\#

In C#, both `records` and `structs` are used to create user-defined types that can contain multiple members. However, they have some key differences that make them suitable for different scenarios. Let's delve into these differences.

## What is a Struct?

A `struct`, or structure, is a value type in C#. It is used to encapsulate small groups of related variables. Here is an example of a struct:

```csharp [program.cs]
public struct Point
{
    public int X { get; set; }
    public int Y { get; set; }
}
```

### Key Features of Structs

- **Value Type**: Structs are value types. When a struct is assigned to a new variable, a copy of the value is made.
- **No Inheritance**: Structs cannot inherit from other structs or classes, and they cannot be the base of a class.
- **No Null Values**: A struct cannot be null unless it's a nullable type.

## What is a Record?

Records were introduced in C# 9.0 as a way to create immutable reference types. Here is an example of a record:

```csharp [program.cs]
public record Point(int X, int Y);
```

### Key Features of Records

- **Reference Type**: Records are reference types. When a record is assigned to a new variable, both variables point to the same object.
- **Immutability**: Records are immutable by default. This means once a record object is created, it cannot be changed.
- **Value Equality**: Records use value equality. Two record objects are equal if their types are identical and all property values are equal.

### Comparing Structs and Records

| Feature      | Struct             | Record         |
| ------------ | ------------------ | -------------- |
| Type         | Value Type         | Reference Type |
| Inheritance  | No                 | Yes            |
| Null Values  | No                 | Yes            |
| Immutability | No                 | Yes            |
| Equality     | Reference Equality | Value Equality |

### Conclusion

While both `structs` and `records` have their uses, they serve different purposes in C#. `Structs` are best for small, simple objects where performance is a concern, while `records` are ideal for larger, more complex objects where immutability and value semantics are more important.

Remember, choosing between a `struct` and a `record` depends on what you need for your specific use case. Happy coding!
