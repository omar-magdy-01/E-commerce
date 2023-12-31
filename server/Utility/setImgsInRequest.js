
exports.set_imgs_in_request = async (req, res, next) => {
    if (req.files && req.files.image) {
        req.body.image = {
            url: req.files.image[ 0 ].path,
            publicId: req.files.image[ 0 ].filename.slice(9),
        };
    }


    if (req.files && req.files) {
        req.files.gallery.map(obj => {
            req.body.gallery = [
                ...req.body.gallery || [],
                {
                    url: obj.path,
                    publicId: obj.filename.slice(9)
                }
            ];
        });
    }
    next();
};