const Contact=require("./Contact");
const Address=require("./Address")


class Employee {
    //firstName
    //lastName
    //employeeID
    //monthlySalary
    //designation
    //department
    //contactNo
    //personalEmail
    //workEmail
    //dateOfBirth
    //address
    //officeAddress
    //reportingOfficer
    //subordinates
    //derived
    //fullName
    //annualSalary
    //dateOfJoining
    //dateOfResignation
    //totalExperienceInCompany
    //age

    constructor(firstName, lastName,employeeID,monthlySalary,designation,department,contactObj,dateOfBirth,address,officeAddress,reportingOfficer,subordinates,fullName,annualSalary,age,dateOfJoining,totalExperienceInCompany) {
        this.firstName = firstName
        this.lastName = lastName
        this.employeeID = employeeID
        this.monthlySalary = monthlySalary
        this.designation = designation
        this.department = department
        this.contactObj= contactObj
        this.dateOfBirth = dateOfBirth
        this.address = address
        this.officeAddress = officeAddress
        this.reportingOfficer = reportingOfficer
        this.subordinates = subordinates
         //derived values initialisation
        this.fullName=fullName
        this.annualSalary=annualSalary
        this.dateOfJoining=dateOfJoining
        this.dateOfResignation=null
        this.totalExperienceInCompany=totalExperienceInCompany
        this.age=age

        
        fullName=getFullName(firstName,lastName)
        annualSalary=getAnnualSalary(salary)
        dateOfJoining=null
        dateOfResignation=null
        totalExperienceInCompany=this.getTotalExperienceInCompany()
        age=null
        
    }

    static getFullName(firstName, lastName) {
        return firstName + " " + lastName
    }
    resign() {
        console.log("complete it");
        this.dateOfResignation = new Date()

    }
    

   setReportingOfficer(reportingOfficer) {
        if (reportingOfficer.constructor.name!=="Employee"&&reportingOfficer!==" ") {

           return["error","reporting officer should be type of employee",reportingOfficer]
        }

        this.reportingOfficer=reportingOfficer
    }

    setSubordinates(subordinates) {
        if (subordinates.constructor.name!=="Employee"&&subordinates!==" ") {
           return["error","reporting officer should be type of employee",reportingOfficer]
        }
        this.subordinates=subordinates
    }

    static getAnnualSalary(monthlySalary) {
        return monthlySalary * 12
    }

    static getTotalExperienceInCompany(dateOfJoining) {
        console.log(dateOfJoining);
        return (new Date().getFullYear()-dateOfJoining.getFullYear()) 
    }

    static getAge(dateOfBirth) {
        return this.age=(new Date().getFullYear())-(dateOfBirth.getFullYear());
        
    }

    static newEmployee(firstName, lastName, employeeID, monthlySalary, designation, department, contactNo,
        personalEmail, workEmail, dateOfBirth, address,homeCountry, officeAddress,officeCountry, reportingOfficer,
        subordinates,dateOfJoining) {
        if (typeof firstName != "string" || typeof lastName != "string") {
            return ["error", "name should be string", firstName, lastName]
        }

        if (typeof employeeID != "number") {
            return ["error", "employee id should be number", employeeID]
        }

        if (typeof monthlySalary != "number") {
            return ["error", "monthly salary should be number", monthlySalary]
        }

        if (typeof designation != "string") {
            return ["error", "designation should be string", designation]
        }

        if (typeof department != "string") {
            return ["error", "department should be string", department]
        }

        if (typeof contactNo != "number") {
            return ["error", "contactNo should be number", contactNo]
        }

        if (typeof personalEmail != "string") {
            return ["error", "personalEmail should be string", personalEmail]
        }

        if (typeof workEmail != "string") {
            return ["error", "workEmail should be string", workEmail]
        }

        if (typeof address!=="string"||typeof officeAddress!="string"||typeof homeCountry!="string"||typeof officeCountry!="string")  {
           return["error"," all address should be of type string only",address,officeAddress,homeCountry,officeCountry] 
        }

        if (dateOfBirth.constructor.name!="Date") {
            console.log(typeof dateOfBirth);
            return"error date"
        }

        if (reportingOfficer.constructor.name!=="Employee"&&reportingOfficer!==" ") {
           return["error","reporting officer should be type of employee",reportingOfficer]
        }
        if (dateOfJoining.constructor.name!="Date") {   
            return["error","date of joining should be in date format",dateOfJoining]
        }
        
        
        

        let fullName=Employee.getFullName(firstName,lastName)
        let annualSalary=Employee.getAnnualSalary(monthlySalary)

        let dateOfResignation=null
        
        let totalExperienceInCompany=Employee.getTotalExperienceInCompany(dateOfJoining)
        let age=Employee.getAge(dateOfBirth)

        let contactObj= new Contact("02226754567",contactNo,personalEmail,workEmail)
        let personalAddressObj= new Address(address,homeCountry)
        let officeAddressObj=new Address(officeAddress,officeCountry)
        
        

        return new Employee(firstName, lastName,employeeID,monthlySalary,designation,department,contactObj,dateOfBirth,personalAddressObj,officeAddressObj,reportingOfficer,subordinates,fullName,annualSalary,age,dateOfJoining,totalExperienceInCompany)

        //return new Employee(firstName, lastName,employeeID,monthlySalary,designation,department,contactNo,personalEmail,workEmail,dateOfBirth,personalAddressObj,officeAddressObj,reportingOfficer,subordinates,fullName,annualSalary)
    }


}

    let ro = Employee.newEmployee("tanu","tiwari",200,53000,"trainee","cash management",9730921978,"personalEmail@gmail.com","workEmail@gmail.com",new Date("1997-7-30"),"Vikroli","India","Andheri","India"," "," ",new Date("2018-6-03"))
    let e1 = Employee.newEmployee("neel","patel",135,35000,"trainee","cash management",3945498253,"personalEmail@gmail.com","workEmail@gmail.com",new Date("2003-03-01"),"Virar","India","Andheri","India",ro," ",new Date("2020-8-23"))
   console.log(ro);
//    console.log(e1);
   console.log(ro.setSubordinates(e1));
   console.log(ro);
   ro.resign();
   console.log(ro);

   let Manager = Employee.newEmployee("sohan","bhavin",100,1000,"manager","cash management",8976567856,"personalEmail@gmail.com","workEmail@gmail.com",new Date("2000-7-20"),"colaba","India","rabale","India"," "," ",new Date("2020-8-23"))
    Manager.setSubordinates(ro)
console.log(Manager);
