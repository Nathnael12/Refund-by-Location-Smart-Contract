// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract PayByLocation {

    struct Employee {
        string name;
        uint256 distance;
        int256 lat;
        int256 lng;
        bool comply;
    }
    mapping(address => Employee) employees;

    function addEmployee(
        address _employeeAddress,
        string memory _name,
        uint256 _allowedDistance,
        int256 _lat,
        int256 _lng
    ) public {
        Employee memory employee = Employee(
            _name,
            _allowedDistance,
            _lat,
            _lng,
            true
        );
        employees[_employeeAddress] = employee;
    }

    function getEmployee(address empAddress)
        public
        view
        returns (Employee memory)
    {
        return (employees[empAddress]);
    }

    function evaluate(int256 _lat, int256 _lng) public   {
        //refrence distance is lat and lng from the constructors
        address empAddr = msg.sender;
        Employee memory employee = getEmployee((empAddr));
        employee.comply = isComplied(_lat, _lng, employee);
        employees[empAddr] = employee;

    }

    function getDistance(
        int256 _lat,
        int256 _lng,
        int256 _lat1,
        int256 _lng1
    ) private pure returns (int256 ) {
        int256 dist = sqrt(((_lat - _lat1)**2) + ((_lng - _lng1)**2));
        return dist;
        // return 6;
    }

    function sqrt(int256 x) private pure returns (int256 y) {
        int256 z = (x + 1) / 2;
        y = x;
        while (z <(y)) {
            y = z;
            z = (x / z + z) / 2;
        }
        return y;
    }

    function isComplied(
        int256 _lat,
        int256 _lng,
        Employee memory _employee
    ) private pure returns (bool) {
        int256 distance = getDistance(
            _lat,
            _lng,
            _employee.lat,
            _employee.lng
        );
        return distance <= int(_employee.distance);
    }

    function getSender() public view returns (address) {
        return msg.sender;
    }
    
}
