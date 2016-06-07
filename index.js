module.exports = {
    gattDefs: {
        service: [
            { name: 'dinServ', uuid: '0xbb00' },
            { name: 'ainServ', uuid: '0xbb10' },
            { name: 'keyServ', uuid: '0xbb70' }
        ],
        characteristic: [
            { name: 'ainMeasPeriod', uuid: '0xbb11', params: ['period'], types: ['uint8'] }
        ]
     },
     analysis: function (periph, basicInfo) {
        var checkFlag = false;

        if (basicInfo.manufacturer === 'sivann' &&
            basicInfo.devName === 'Remote Control' &&
            basicInfo.model === 'RemoteControl' &&
            basicInfo.version.fw === 'v1.0.0' && 
            basicInfo.version.hw === 'v1.0.0' &&
            basicInfo.version.sw === 'v1.0.0')
            checkFlag = true;

        return checkFlag;
    }
};