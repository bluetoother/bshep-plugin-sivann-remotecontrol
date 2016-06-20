module.exports = {
    gattDefs: {
        service: [
            { name: 'keyServ', uuid: '0xbb70' }
        ]
     },
     examine: function (periph, basicInfo) {
        var isMine = false;

        if (basicInfo.manufacturer === 'sivann' &&
            basicInfo.devName === 'Remote Control' &&
            basicInfo.model === 'RemoteControl' &&
            basicInfo.version.fw === 'v1.0.0' && 
            basicInfo.version.hw === 'v1.0.0' &&
            basicInfo.version.sw === 'v1.0.0')
            isMine = true;

        return isMine;
    }
};