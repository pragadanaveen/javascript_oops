class Strr{
    namee;
    age;
    getName()
    {
        return this.namee;
    }
    setName(namee)
    {
        this.namee = namee;
    }
    getAge()
    {
        return this.age;
    }
    setAge(age)
    {
        this.age = age;
    }

}

per = new Strr();
console.log(per.setName("naveen"));
console.log(per.setAge(22));
console.log(per.getAge()+per.getName());