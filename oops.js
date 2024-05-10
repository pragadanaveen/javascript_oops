class enc
{
    constructor(c,d){
        let A= c;
        let b = d;
    }
  
    Seta(A)
    {
        this.A = A;
    }
    Setb(b)
    {
        this.b = b;
    }
    geta()
    {
        return A;
    }
    getb()
    {
        return b;
    }


}
enc = new enc(30,50);
enc.Seta(20);
enc.Setb(30);
console.log(enc.geta()+enc.getb());