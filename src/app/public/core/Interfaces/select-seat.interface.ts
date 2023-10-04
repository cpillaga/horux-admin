export interface SelectSeat {
    _id:         string;
    name:        string;
    quantity:    number;
    seat?:       Seats[];
    list?:       string;
    type?:       string;
}

export interface Seats {
    position:    string;
    number:      string;
    customer?:   any;
}
