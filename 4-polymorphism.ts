
// polymorphism means function over riding - classes have same methods with different implementations

/* A class named A with a method named m that logs "hello from super class" to the console. */
class A {
  m() {
    console.log("hello from super class A");
  }
}
/* The class a1 extends the class A and overrides the method m */
class a1 extends A {
  m(): void {
/* Calling the method m of the super class. */
    
    console.log(`subclass a1`);
  }
}
/* The class a2 extends the class A and overrides the method m */
class a2 extends A {
  m(): void {
    /* Calling the method m of the super class. */
    console.log(`subclass a2`);
  }
}
/* The class a3 extends the class A and overrides the method m */
class a3 extends A {
  m(): void {
   /* Calling the method m of the super class. */
   
    console.log(`subclass a3`);
  }
}

/* Creating instances of the classes a1, a2 and a3 and assigning them to the variables b1, b2 and b3. */
const b1: A = new a1();
const b2: A = new a2();
const b3: A = new a3();


b1.m();
b2.m();
b3.m();