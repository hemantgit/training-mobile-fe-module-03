define(function (require, exports, module) {
    'use strict';

    var template = '' +
        '<table class="table no-bg no-margin-bottom h6">' +
        '    <tbody>' +
        '    <tr>' +
        '        <td class="col-xs-1"></td>' +
        '        <td class="col-xs-11">' +
        '            <div class="clearfix" id="transaction-details-data-{{transaction.id}}">' +
        '                <div ng-repeat="detail in transaction.details.special">' +
        '' +
        '                    <div ng-switch="detail.name">' +
        '' +
        '                        <div ng-switch-when="address"' +
        '                             class="col-xs-2 no-padding-left"' +
        '                             ng-class="{\'col-xs-9\': detail.longValue}" >' +
        '                            <p>' +
        '                                <span ng-show="detail.value.street">{{detail.value.street}}</span><br/>' +
        '                                <span ng-show="detail.value.city">{{detail.value.city}}</span>' +
        '                                <span ng-show="detail.value.state">, {{detail.value.state}}</span><br/>' +
        '                                <span ng-show="detail.value.country">{{detail.value.country}}</span><br/>' +
        '                                <span ng-show="detail.value.zip">{{detail.value.zip}}</span>' +
        '                            </p>' +
        '                        </div>' +
        '' +
        '                        <div data-ng-switch-when="bookingDateTime" class="col-xs-2">' +
        '                            <p>{{detail.value | date:\'shortTime\'}}<br/>{{detail.value | date:\'longDate\'}}</p>' +
        '                        </div>' +
        '' +
        '                        <div ng-switch-default="" class="col-xs-4">' +
        '                            <p>{{detail.value}}</p>' +
        '                        </div>' +
        '' +
        '                    </div>' +
        '' +
        '                </div>' +
        '' +
        '                <div class="cols-xs-3 pull-right" ng-show="transaction.details.location" aria-hidden="true">' +
        '                    <img ng-src="{{transaction.details.location.mapUrl}}" width="160" height="90" alt="{{\'Location map\'|translate}}"/>' +
        '                </div>' +
        '            </div>' +
        '' +
        '            <div class="col-xs-8 no-padding-left">' +
        '                <div ng-repeat="detail in transaction.details.custom">' +
        '                    <div ng-switch="detail.name" class="col-xs-3 no-padding-left" ng-class="{\'col-xs-9\': detail.longValue}">' +
        '                        <!-- <span class="h3" lp-i18n="{{detail.name}}"></span> -->' +
        '                        <p>{{detail.value}}</p>' +
        '                    </div>' +
        '                </div>' +
        '            </div>' +
        '' +
        '        </td>' +
        '    </tr>' +
        '    </tbody>' +
        '</table>';

    return template;
});
