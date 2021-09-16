function Flights() {
    function calculateNumberOfFlights(passengers, capacity, flights) {
        flights  = passengers/capacity + 1 
    }
    return calculateNumberOfFlights();
}
module.export = Flights();
