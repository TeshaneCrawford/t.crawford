---
title: Records and Structs in C#
description: A comprehensive guide to understanding the differences between records and structs in C# and when to use each effectively.
authors:
  - name: Teshane Crawford
    picture: https://github.com/TeshaneCrawford.png
    twitter: _d_shybrid
tags:
  - C#
  - dotnet
  - data-structures
date: 2023-08-15
updatedAt: 2023-08-15
image:
---

## Understanding Records and Structs in C#: A Comprehensive Guide

In modern C# development, choosing the right data structure is crucial for writing efficient and maintainable code. Two important options are `records` and `structs`, each with distinct characteristics and use cases. This guide will help you understand when to use each one.

## What is a Struct?

A `struct` (structure) is a value type in C# that encapsulates related data and behaviors. Structs are particularly useful for small, lightweight objects where performance is critical.

Here's a basic example of a struct:

```cs [program.cs]
public struct Point
{
    public int X { get; set; }
    public int Y { get; set; }

    public Point(int x, int y)
    {
        X = x;
        Y = y;
    }

    public double DistanceFromOrigin() =>
        Math.Sqrt(X * X + Y * Y);
}
```

### Key Features of Structs

1. **Value Semantics**\* Structs are copied when assigned to a new variable
   * Each instance maintains its own copy of the data
   * Passed by value to methods (unless using `ref` or `out`)
2. **Performance Benefits**\* Allocated on the stack (for local variables)
   * No garbage collection overhead
   * Efficient for small data structures
3. **Limitations**\* Cannot inherit from other structs or classes
   * Cannot be null (unless declared as nullable)
   * Should remain small and lightweight
   * All fields must be initialized

## What is a Record?

Introduced in C# 9.0, records are reference types designed for immutable data modeling. They provide built-in functionality for value-based equality and data manipulation.

Here's a simple record declaration:

```cs [program.cs]
// Immutable record with positional parameters
public record Point(int X, int Y)
{
    public double DistanceFromOrigin =>
        Math.Sqrt(X * X + Y * Y);
}

// Mutable record (C# 10.0+)
public record class MutablePoint
{
    public int X { get; set; }
    public int Y { get; set; }
}
```

### Key Features of Records

1. **Built-in Functionality**\* Value-based equality comparisons
   * Immutability by default
   * Built-in `ToString()` implementation
   * Copy constructors with `with` expressions
2. **Inheritance Support**\* Can inherit from other records
   * Support for virtual members
   * Interface implementation
3. **Pattern Matching**\* First-class support for deconstruction
   * Enhanced pattern matching capabilities

## Comparing Structs and Records

| Feature         | Struct                 | Record                  |
| --------------- | ---------------------- | ----------------------- |
| Type Category   | Value Type             | Reference Type          |
| Memory Location | Stack (usually)        | Heap                    |
| Mutability      | Mutable by default     | Immutable by default    |
| Inheritance     | No inheritance         | Supports inheritance    |
| Null Assignment | No (unless nullable)   | Yes                     |
| Equality        | Member-wise comparison | Value-based equality    |
| Performance     | Better for small types | Better for larger types |
| Use Case        | Small, simple data     | Complex domain models   |

## When to Use Each

### Choose a Struct When

- Working with small, simple data structures
- Performance is critical
- The data structure is less than 16 bytes
- Value semantics are desired
- The type will be used in arrays

```cs [program.cs]
public struct Coordinate
{
    public double Latitude { get; init; }
    public double Longitude { get; init; }
}
```

### Choose a Record When

- Modeling immutable data
- Working with domain models
- Need value-based equality
- Want built-in formatting and deconstruction
- Inheritance is required

```cs [program.cs]
public record Person(
    string FirstName,
    string LastName,
    DateOnly DateOfBirth)
{
    public int Age =>
        DateOnly.FromDateTime(DateTime.Now).Year - DateOfBirth.Year;
}
```

## Best Practices

1. **Struct Best Practices**\* Keep them small and focused
   * Consider making them readonly
   * Implement `IEquatable<T>` for better performance
   * Avoid reference type fields
2. **Record Best Practices**\* Use init-only properties for immutability
   * Leverage with-expressions for modifications
   * Consider using records for DTOs
   * Use positional syntax for simple cases

## Conclusion

Both `structs` and `records` serve important purposes in C# development:

- Use `structs` when you need lightweight, value-type semantics and performance is crucial
- Use `records` when you want immutable objects with value-based equality and rich built-in functionality

The choice between them should be based on your specific requirements around immutability, equality comparison, and performance needs. Remember that premature optimization is the root of all evil - choose the type that makes your code most maintainable and clear first, then optimize if needed.

Happy coding! 🚀
