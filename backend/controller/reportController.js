const Report = require("../models/reportModal");
const cloudinary = require("cloudinary")

exports.createReport = async (req, res, next) => {
    try {
        let images = [];
        if (typeof req.body.images === "string") {
            images.push(req.body.images)
        }
        else images = req.body.images

        const imagesLink = [];

        for (let i = 0; i < images.length; i++) {
            const result = await cloudinary.v2.uploader.upload(images[i], {
                folder: "crime_report",
            });

            imagesLink.push({
                public_id: result.public_id,
                url: result.secure_url,
            })
        }

        req.body.images = imagesLink;
        req.body.user = req.user.id;
        const report = await Report.create(req.body);
        res.status(201).json({
            success: true,
            report
        })

    } catch (err) {
        res.send(err.message);
    }

}


exports.getReports = async (req, res, next) => {
    try {
        const reports = await Report.find({ crimeType: req.user.role });
        // if (req.query.status && req.query.status !== "")
        //     reports = await Report.find({ crimeType: req.user.role, status: req.query.status });
        // else reports = await Report.find({ crimeType: req.user.role });

        res.status(200).json({
            success: true,
            reports
        })
    } catch (err) {
        res.send(err.message);
    }
}

//get single report
exports.getSingleReport = async (req, res, next) => {
    try {
        const report = await Report.findById(req.params.id).populate("user", "name email");
        if (!report) {
            return res.status(404).json({
                success: false,
                message: `Report not found with id ${req.params.id}`
            });
        }

        res.status(200).json({
            success: true,
            report
        })
    } catch (err) {
        res.send(err.message);
    }
}

exports.updateReportStatus = async (req, res, next) => {
    try {
        const report = await Report.findById(req.params.id);
        if (!report) {
            return res.status(404).json({
                success: false,
                message: `Report not found with id ${req.params.id}`
            });
        }
        report.status = req.body.status;
        res.status(200).json({
            success: true,
            report
        })
    } catch (err) {
        res.send(err.message);
    }
}

