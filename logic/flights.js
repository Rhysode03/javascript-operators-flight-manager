function Flights() {
    function calculateNumberOfFlights(passengers, capacity) {
        let flights;
        if (passengers % capacity == 0) {
            flights = passengers/capacity + 1
        }
    }
    return calculateNumberOfFlights();
}
module.export = Flights();
