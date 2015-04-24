/**
 * @param val
 * @param compare
 * @param optOne
 * @param optTwo
 * @returns {string}
 */

labelCon = function (val, compare, optOne, optTwo) {
    var labelStr = "<label class='label label-";
    var lastLabelStr = "'>";
    var closeLabelStr = "</label>";
    if (val === compare) {
        return labelStr + optOne + lastLabelStr + val + closeLabelStr;
    } else {
        return labelStr + optTwo + lastLabelStr + val + closeLabelStr;
    }
};

/**
 * Template registerHelper
 */
if (Meteor.isClient) {
    Template.registerHelper('labelCon', function (val, compare, optOne, optTwo) {

        var labelStr = "<label class='label label-";
        var lastLabelStr = "'>";
        var closeLabelStr = "</label>";
        if (val === compare) {
            return Spacebars.SafeString(labelStr + optOne + lastLabelStr + val + closeLabelStr);
        } else {
            return Spacebars.SafeString(labelStr + optTwo + lastLabelStr + val + closeLabelStr);
        }
    });
}