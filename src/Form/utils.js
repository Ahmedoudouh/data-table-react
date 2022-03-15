export function selectCheck(formData, check) {
    if (formData === check) {
        return check + " is required!";
    } else {
        return true;
    }
}

export const required = (formData, check) => {
    if (!formData) {
        return check + " is required!";
    } else {
        return true;
    }
};

export function description(formData, number) {
    if (formData < number) {
        return "description should have 10 characters!";
    } else {
        return true;
    }
}

export function matchNumber(formData, name) {
    if (formData.match("^[a-z A-Z]+$")) {
        return "customer " + name + " must be number!";
    } else {
        return true;
    }
}
export function matchString(formData, name) {
    if (!formData.match("^[a-z A-Z]+$")) {
        return "customer " + name + " must be number!";
    } else {
        return true;
    }
}

export const alreadyExistsName = (array, formDataName) => {
    const result = array.some((customer) => {
        return customer.name === formDataName;
    });
    return result;
};

export const alreadyExistsNumber = (array, formDataNumber) => {
    const result = array.some((customer) => {
        return customer.number === formDataNumber;
    });
    return result;
};