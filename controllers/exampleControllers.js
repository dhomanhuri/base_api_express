const model = require("../models/index");
const jwt = require("jsonwebtoken");

const example = (req, res) => {
    try {
        let data = model.Todo.findAll();
        if (!data) {
            throw "data kosong";
        }
        res.status(200).send({
            data: data,
            message: "success",
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = { example };
