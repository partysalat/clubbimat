import templateService from '../services/templateService';

function flunkimat(event, context, cb) {
  cb(null, templateService.renderHtml(event.stage));
}

module.exports.flunkimat = flunkimat;
