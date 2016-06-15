module.exports = {
    gattDefs: {
        service: [
            { name: 'keyServ', uuid: '0xbb70' }
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