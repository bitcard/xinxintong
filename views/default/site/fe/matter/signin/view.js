'use strict';
require('./view.css');

var ngApp = require('./main.js');
ngApp.factory('Record', ['http2', '$q', 'tmsLocation', function (http2, $q, LS) {
    var Record, _ins, _running;
    Record = function () {
        this.current = {
            enroll_at: 0
        };
    };
    _running = false;
    Record.prototype.get = function (ek) {
        if (_running) return false;
        _running = true;
        var _this, url, deferred;
        _this = this;
        deferred = $q.defer();
        url = LS.j('record/get', 'site', 'app');
        ek && (url += '&ek=' + ek);
        http2.get(url).then(function (rsp) {
            var oRecord;
            oRecord = rsp.data;
            _this.current = oRecord;
            deferred.resolve(oRecord);
            _running = false;
        });
        return deferred.promise;
    };
    return {
        ins: function (siteId, appId, rid, $scope) {
            if (_ins) {
                return _ins;
            }
            _ins = new Record(siteId, appId, rid, $scope);
            return _ins;
        }
    };
}]);
ngApp.controller('ctrlRecord', ['$scope', '$sce', function ($scope, $sce) {
    $scope.value2Label = function (schemaId) {
        var val, oSchema, aVal, aLab = [];
        if ($scope.app._schemasById && (oSchema = $scope.app._schemasById[schemaId])) {
            if ($scope.Record && $scope.Record.current && $scope.Record.current.data) {
                if (val = $scope.Record.current.data[schemaId]) {
                    if (oSchema.ops && oSchema.ops.length) {
                        aVal = val.split(',');
                        oSchema.ops.forEach(function (op) {
                            aVal.indexOf(op.v) !== -1 && aLab.push(op.l);
                        });
                        val = aLab.join(',');
                    }
                }
            } else {
                val = '';
            }
        }
        return $sce.trustAsHtml(val);
    };
}]);
ngApp.controller('ctrlView', ['$scope', 'tmsLocation', 'noticebox', 'Record', function ($scope, LS, noticebox, Record) {
    var facRecord = Record.ins();
    $scope.Record = facRecord;
    facRecord.get(LS.s().ek);
    $scope.editRecord = function (event, page) {
        page ? $scope.gotoPage(event, page, facRecord.current.enroll_key) : noticebox.error('没有指定登记编辑页');
    };
    $scope.gotoEnroll = function (event) {
        var oEntryRule;
        if (oEntryRule = $scope.app.entryRule) {
            if (oEntryRule.enroll && oEntryRule.enroll.id) {
                var url = '/rest/site/fe/matter/enroll';
                url += '?site=' + LS.s().site;
                url += '&app=' + oEntryRule.enroll.id;
                url += '&ignoretime=Y';
                location.href = url;
                return;
            }
        }
        noticebox.warn('没有指定关联报名表，无法填写报名信息');
    };
    $scope.doAction = function (event, oAction) {
        switch (oAction.name) {
            case 'editRecord':
                $scope.editRecord(event, oAction.next);
                break;
            case 'gotoEnroll':
                $scope.gotoEnroll(event);
                break;
            case 'gotoPage':
                $scope.gotoPage(event, oAction.next);
                break;
            case 'closeWindow':
                $scope.closeWindow();
                break;
        }
    };
}]);