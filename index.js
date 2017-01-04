module.exports = {
    gattDefs: {
        service: [
            { name: 'keyServ', uuid: '0xbb70' }
        ],
        characteristic: [
        ]
     },
     examine: function (periph, basicInfo) {
        var isMine = false;

        if (basicInfo.manufacturer === 'sivann' &&
            basicInfo.devName === 'Remote Control')
            isMine = true;

        return isMine;
    }
};
