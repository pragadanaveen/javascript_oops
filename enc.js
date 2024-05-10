class enc{
      a;
      b;  
   setA(a){
        this.a = a;
    }
    setB(b){
        this.b = b;
    }
    getA(){
        return this.a;
    }
    getB()
    {
        return this.b;
    }
}

var en = new enc();
en.setA("ramesh");
en.setB(22);
console.log("name is "+en.getA()+" age is "+en.getB());