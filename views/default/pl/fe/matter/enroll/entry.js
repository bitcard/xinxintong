define(['frame', 'groupService'], function(ngApp) {
    'use strict';
    ngApp.provider.controller('ctrlEntry', ['$scope', 'mediagallery', '$timeout', 'srvEnrollApp', 'srvTimerNotice', function($scope, mediagallery, $timeout, srvEnrollApp, srvTimerNotice) {
        srvEnrollApp.get().then(function(app) {
            var oEntry;
            oEntry = {
                url: app.entryUrl,
                qrcode: '/rest/site/fe/matter/enroll/qrcode?site=' + app.siteid + '&url=' + encodeURIComponent(app.entryUrl),
                pages: []
            };
            $scope.entry = oEntry;
        });
        $scope.setPic = function() {
            var options = {
                callback: function(url) {
                    $scope.app.pic = url + '?_=' + (new Date * 1);
                    srvEnrollApp.update('pic');
                }
            };
            mediagallery.open($scope.app.siteid, options);
        };
        $scope.removePic = function() {
            $scope.app.pic = '';
            srvEnrollApp.update('pic');
        };
        $scope.downloadQrcode = function(url) {
            $('<a href="' + url + '" download="登记二维码.png"></a>')[0].click();
        };
        /* 定时任务服务 */
        $scope.srvTimer = srvTimerNotice;
        /* 定时任务截止时间 */
        $scope.$on('xxt.tms-datepicker.change', function(event, data) {
            var oTimer;
            if (oTimer = $scope.srvTimer.timerById(data.state)) {
                oTimer.task.task_expire_at = data.value;
            }
        });
    }]);
    ngApp.provider.controller('ctrlOpUrl', ['$scope', 'srvQuickEntry', 'srvEnrollApp', function($scope, srvQuickEntry, srvEnrollApp) {
        var targetUrl, host, opEntry;
        $scope.opEntry = opEntry = {};
        srvEnrollApp.get().then(function(app) {
            targetUrl = app.opUrl;
            host = targetUrl.match(/\/\/(\S+?)\//);
            host = host.length === 2 ? host[1] : location.host;
            srvQuickEntry.get(targetUrl).then(function(entry) {
                if (entry) {
                    opEntry.url = location.protocol + '//' + host + '/q/' + entry.code;
                    opEntry.password = entry.password;
                    opEntry.code = entry.code;
                    opEntry.can_favor = entry.can_favor;
                }
            });
        });
        $scope.makeOpUrl = function() {
            srvQuickEntry.add(targetUrl, $scope.app.title).then(function(task) {
                $scope.app.op_short_url_code = task.code;
                srvEnrollApp.update('op_short_url_code');
                opEntry.url = location.protocol + '//' + host + '/q/' + task.code;
                opEntry.code = task.code;
            });
        };
        $scope.closeOpUrl = function() {
            srvQuickEntry.remove(targetUrl).then(function(task) {
                opEntry.url = '';
                opEntry.code = '';
                opEntry.can_favor = 'N';
                opEntry.password = '';
                $scope.app.op_short_url_code = '';
                srvEnrollApp.update('op_short_url_code');
            });
        };
        $scope.configOpUrl = function(event, prop) {
            event.preventDefault();
            srvQuickEntry.config(targetUrl, {
                password: opEntry.password
            });
        };
        $scope.updCanFavor = function() {
            srvQuickEntry.update(opEntry.code, { can_favor: opEntry.can_favor });
        };
    }]);
    ngApp.provider.controller('ctrlRpUrl', ['$scope', 'srvQuickEntry', 'srvEnrollApp', function($scope, srvQuickEntry, srvEnrollApp) {
        var targetUrl, host, rpEntry;
        $scope.rpEntry = rpEntry = {};
        srvEnrollApp.get().then(function(app) {
            targetUrl = app.rpUrl;
            host = targetUrl.match(/\/\/(\S+?)\//);
            host = host.length === 2 ? host[1] : location.host;
            srvQuickEntry.get(targetUrl).then(function(entry) {
                if (entry) {
                    rpEntry.url = location.protocol + '//' + host + '/q/' + entry.code;
                    rpEntry.password = entry.password;
                    rpEntry.code = entry.code;
                    rpEntry.can_favor = entry.can_favor;
                }
            });
        });
        $scope.makeOpUrl = function() {
            srvQuickEntry.add(targetUrl, $scope.app.title).then(function(task) {
                $scope.app.rp_short_url_code = task.code;
                srvEnrollApp.update('rp_short_url_code');
                rpEntry.url = location.protocol + '//' + host + '/q/' + task.code;
                rpEntry.code = task.code;
            });
        };
        $scope.closeOpUrl = function() {
            srvQuickEntry.remove(targetUrl).then(function(task) {
                rpEntry.url = '';
                rpEntry.code = '';
                rpEntry.can_favor = 'N';
                rpEntry.password = '';
                $scope.app.rp_short_url_code = '';
                srvEnrollApp.update('rp_short_url_code');
            });
        };
        $scope.configOpUrl = function(event, prop) {
            event.preventDefault();
            srvQuickEntry.config(targetUrl, {
                password: rpEntry.password
            });
        };
        $scope.updCanFavor = function() {
            srvQuickEntry.update(rpEntry.code, { can_favor: rpEntry.can_favor });
        };
    }]);
    /**
     * 任务提醒
     */
    ngApp.provider.controller('ctrlTaskRemind', ['$scope', '$parse', '$q', 'srvEnrollApp', 'tkGroupApp', function($scope, $parse, $q, srvEnrollApp, tkGroupApp) {
        function fnGetEntryRuleMschema() {
            var oAppEntryRule = $scope.app.entryRule;
            if (oAppEntryRule.scope && oAppEntryRule.scope.member === 'Y') {
                if (oAppEntryRule.member && Object.keys(oAppEntryRule.member).length) {
                    if ($scope.mschemasById[Object.keys(oAppEntryRule.member)[0]]) {
                        return $scope.mschemasById[Object.keys(oAppEntryRule.member)[0]];
                    }
                }
            }
            return false;
        }
        $scope.srvTimer.onBeforeSave(function(oTimer) {
            var defer = $q.defer(),
                oTask = oTimer.task;
            if (oTask && oTask.task_model === 'remind') {
                if (oTask.task_arguments) {
                    var oArgs = oTask.task_arguments;
                    if (oArgs.receiver) {
                        if (oArgs.receiver.scope) {
                            if (oArgs.receiver.scope === 'enroll') {
                                delete oArgs.receiver.app;
                            } else if (oArgs.receiver.scope === 'mschema') {
                                delete oArgs.receiver.app;
                            } else if (oArgs.receiver.scope === 'group') {
                                if (oTimer._temp.group && !oTimer._temp.group.auto) {
                                    oArgs.receiver.app = oTimer._temp.group;
                                }
                            }
                        }
                    }
                }
                defer.resolve();
            }
            return defer.promise;
        });
        $scope.assignGroup = function(oTimer) {
            tkGroupApp.choose($scope.app).then(function(oResult) {
                var oGrpApp;
                if (oResult.app) {
                    oGrpApp = { id: oResult.app.id, title: oResult.app.title };
                    if (oResult.round) {
                        oGrpApp.round = { id: oResult.round.id, title: oResult.round.title };
                    }
                    $parse('_temp.group').assign(oTimer, oGrpApp);
                    oTimer.modified = true;
                }
            });
        };
        $scope.defaultReceiver = function(oTimer) {
            var oRule = $parse('task.task_arguments.receiver')(oTimer);
            switch (oRule.scope) {
                case 'mschema':
                    var oMschema;
                    if (oMschema = fnGetEntryRuleMschema()) {
                        $parse('_temp.mschema').assign(oTimer, { title: oMschema.title, auto: true });
                    }
                    break;
                case 'group':
                    if (!oRule.app && $scope.app.entryRule.group) {
                        $parse('_temp.group').assign(oTimer, { id: $scope.app.entryRule.group.id, title: $scope.app.entryRule.group.title, auto: true });
                    }
                    break;
            }
        };
        srvEnrollApp.get().then(function(oApp) {
            $scope.srvTimer.list(oApp, 'remind').then(function(timers) {
                if (timers && timers.length) {
                    timers.forEach(function(oTimer) {
                        $scope.defaultReceiver(oTimer);
                    });
                }
                $scope.timers = timers;
            });
        });
    }]);
    /**
     * 事件提醒
     */
    ngApp.provider.controller('ctrlEventRemind', ['$scope', '$parse', '$timeout', 'srvEnrollApp', 'tkGroupApp', 'tkEnrollApp', function($scope, $parse, $timeout, srvEnlApp, tkGroupApp, tkEnrollApp) {
        var _oConfig;
        $scope.modified = false;
        $scope.config = null;
        $scope.assignGroup = function(oRule) {
            tkGroupApp.choose($scope.app).then(function(oResult) {
                var oGrpApp;
                if (oResult.app) {
                    oGrpApp = { id: oResult.app.id, title: oResult.app.title };
                    if (oResult.round) {
                        oGrpApp.round = { id: oResult.round.id, title: oResult.round.title };
                    }
                    $parse('group').assign(oRule, oGrpApp);
                }
            });
        };
        $scope.save = function() {
            tkEnrollApp.update($scope.app, { notifyConfig: _oConfig }).then(function(oNewApp) {
                $scope.app.notifyConfig = $scope.config = _oConfig = oNewApp.notifyConfig;
                /* watch后再执行 */
                $timeout(function() {
                    $scope.modified = false;
                });
            });
        };
        srvEnlApp.get().then(function(oApp) {
            $scope.config = _oConfig = angular.copy($scope.app.notifyConfig);
            $scope.$watch('config', function(oNewConfig, oOldConfig) {
                if (oNewConfig && oNewConfig !== oOldConfig) {
                    $scope.modified = true;
                }
            }, true);
        });
    }]);
});