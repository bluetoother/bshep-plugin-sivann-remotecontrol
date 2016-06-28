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
            basicInfo.fwRev === 'v1.0.0' && 
            basicInfo.hwRev === 'v1.0.0' &&
            basicInfo.swRev === 'v1.0.0')
            isMine = true;

        return isMine;
    }
};