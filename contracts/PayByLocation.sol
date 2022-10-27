// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract PayByLocation {

    struct Employee {
        string name;
        uint256 distance;
        uint256 lat;
        uint256 lng;
        bool comply;
    }
    mapping(address => Employee) employees;

    function addEmployee(
        address _employeeAddress,
        string memory _name,
        uint256 _allowedDistance,
        uint256 _lat,
        uint256 _lng
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

    function evaluate(uint256 _lat, uint256 _lng) public view  {
        //refrence distance is lat and lng from the constructors
        address empAddr = msg.sender;
        Employee memory employee = getEmployee((empAddr));
        employee.comply = isComplied(_lat, _lng, employee);

    }

    function getDistance(
        uint256 _lat,
        uint256 _lng,
        uint256 _lat1,
        uint256 _lng1
    ) private pure returns (uint256) {
        return sqrt(((_lat - _lat1)**2) + ((_lng - _lng1)**2));
    }

    function sqrt(uint256 x) private pure returns (uint256 y) {
        uint256 z = (x + 1) / 2;
        y = x;
        while (z < y) {
            y = z;
            z = (x / z + z) / 2;
        }
    }

    function isComplied(
        uint256 _lat,
        uint256 _lng,
        Employee memory _employee
    ) public pure returns (bool) {
        uint256 distance = getDistance(
            _lat,
            _lng,
            _employee.lat,
            _employee.lng
        );
        return distance <= _employee.distance;
    }
}
