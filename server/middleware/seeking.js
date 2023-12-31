const handleDoc = (req, res, next) => {

// 
    // search
    seeking = {};
    if (req.query.keyword) {

        seeking.$or = [
            { name: { $regex: req.query.keyword , $options: 'i' } },
            { description: { $regex: req.query.keyword , $options: 'i'} },
        ];
    }


 
    // sorting
    let sortBy;
    if (req.query.sort) {
        sortBy = req.query.sort.split(',').join(" ");
    } else {
        sortBy = '-createdAt';
    }





    req.seeking = seeking;
    req.sortBy = sortBy;
    next();



};

module.exports = handleDoc;