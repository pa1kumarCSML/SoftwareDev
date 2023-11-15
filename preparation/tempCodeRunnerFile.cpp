std::ostream& operator<<(std::ostream& os, const MyClass& obj) {
        os << "MyClass object with data: " << obj.data;
        return os;
    }