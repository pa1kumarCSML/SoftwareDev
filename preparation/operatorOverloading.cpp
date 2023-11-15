#include <iostream>

using namespace std;
class MyClass {
public:
    int data;

    MyClass(int val=0) : data(val) {}

    MyClass(const MyClass& obj){
        cout<<"copy constructor"<<endl;
        this->data = obj.data;
    }

    void operator=(const MyClass& obj){
        cout<<"copy assignment operator invoked..."<<endl;
        this->data=obj.data;
    }

    // Overload the << operator for MyClass
    friend ostream& operator<<(std::ostream& os, const MyClass& obj) {
        os << "MyClass object with data: " << obj.data;
        return os;
    }
};

int main() {
    MyClass obj(42);
    std::cout << obj << std::endl;  // This will call your overloaded operator
    MyClass obj2;
    obj2=obj;
    cout<<obj2;
    return 0;
}
