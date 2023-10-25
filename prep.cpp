#include <iostream>

// Creating a namespace named 'MyNamespace'
namespace MyNamespace {
    int myVariable = 42;

    void myFunction() {
        std::cout << "Hello from MyNamespace!" << std::endl;
    }
};

// Another namespace
namespace AnotherNamespace {
    double myVariable = 3.14;
}


using namespace std;
using namespace AnotherNamespace;

int main() {
    cout << myVariable <<endl;
    myFunction();
    return 0;
}
