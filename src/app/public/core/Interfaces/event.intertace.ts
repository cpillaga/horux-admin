export interface Event {
    _id?:                     string;
    category?:                string;
    iva?:                     boolean;
    valueIva?:                number;
    secretLocation?:          boolean;
    discountDisability?:      boolean;
    isAllPublic?:             boolean;
    discountChildren?:        boolean;
    preSales?:                boolean;
    comment?:                 string;
    available?:               string;
    isDelete?:                boolean;
    payments?:                string[] | null;
    hasCapacity?:             boolean;
    maximunTickets?:          number;
    nameEvent?:               string;
    description?:             string;
    city?:                    Location;
    place?:                   string;
    date?:                    string;
    startTime?:               string;
    endTime?:                 string;
    lat?:                     string;
    lng?:                     string;
    ageChildren?:             number | null;
    percentageDisability?:    number;
    percentageChildren?:      number;
    existRequirements?:       boolean;
    requirementsDescription?: string;
    hasParking?:              boolean;
    parkingNumber?:           null;
    openingHours?:            string;
    img?:                     string;
    isFree?:                  boolean;
    organizer?:               string;
    sponsors?:                any[];
    imgHeader?:               string;
    haveSubscribers?:         boolean;
    timeName?:                any[];
    publicType?:             string;
}