module.exports = {
    gattDefs: {
        service: [
            { name: 'dInServ', uuid: '0xbb00' },
            { name: 'aInServ', uuid: '0xbb10' },
            { name: 'keyServ', uuid: '0xbb70' }
        ],
        characteristic: [
            { name: 'aInConfig', uuid: '0xbb11', params: ['config'], types: ['boolean'] },
            { name: 'aInMeasPeriod', uuid: '0xbb12', params: ['period'], types: ['uint8'] }
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
