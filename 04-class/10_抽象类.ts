/* 
  抽象类作为其它派生类的基类使用，它们不直接实例化。
  不同于接口，抽象类可以包含成员的实现细节。
 */
{
  abstract class Department {

    constructor(public name: string) {
    }

    printName(): void {
      console.log('Department name: ' + this.name);
    }
    // 抽象类中的抽象方法不包含具体实现，必须在派生类中实现
    abstract printMeeting(): void;
  }

  class AccountingDepartment extends Department {

    constructor() {
      super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
    }

    printMeeting(): void {
      console.log('The Accounting Department meets each Monday at 10am.');
    }

    generateReports(): void {
      console.log('Generating accounting reports...');
    }
  }

  let department: Department; // 允许创建一个对抽象类型的引用
  department = new Department(); // 错误: 不能创建一个抽象类的实例
  department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
  department.printName();
  department.printMeeting();
  department.generateReports(); // 错误: 方法在声明的抽象类中不存在
}