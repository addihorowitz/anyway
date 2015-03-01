var ADD_MARKER_OFFER = "הוסף הצעה";
var ADD_MARKER_PETITION = "הוסף עצומה";


var SEVERITY_FATAL = 1;
var SEVERITY_SEVERE = 2;
var SEVERITY_LIGHT = 3;
var SEVERITY_VARIOUS = 4;

var SEVERITY_ATTRIBUTES = {};
SEVERITY_ATTRIBUTES[SEVERITY_FATAL] = "showFatal";
SEVERITY_ATTRIBUTES[SEVERITY_SEVERE] = "showSevere";
SEVERITY_ATTRIBUTES[SEVERITY_LIGHT] = "showLight";

var ACCIDENT_TYPE_CAR_TO_CAR =-1; // Synthetic type
var ACCIDENT_TYPE_CAR_TO_OBJECT = -2; // Synthetic type
var ACCIDENT_TYPE_CAR_TO_PEDESTRIAN = 1;
var ACCIDENT_TYPE_FRONT_TO_SIDE = 2;
var ACCIDENT_TYPE_FRONT_TO_REAR = 3;
var ACCIDENT_TYPE_SIDE_TO_SIDE = 4;
var ACCIDENT_TYPE_FRONT_TO_FRONT = 5;
var ACCIDENT_TYPE_WITH_STOPPED_CAR_NO_PARKING = 6;
var ACCIDENT_TYPE_WITH_STOPPED_CAR_PARKING = 7;
var ACCIDENT_TYPE_WITH_STILL_OBJECT = 8;
var ACCIDENT_TYPE_OFF_ROAD_OR_SIDEWALK = 9;
var ACCIDENT_TYPE_ROLLOVER = 10;
var ACCIDENT_TYPE_SKID = 11;
var ACCIDENT_TYPE_HIT_PASSSENGER_IN_CAR = 12;
var ACCIDENT_TYPE_FALLING_OFF_MOVING_VEHICLE = 13;
var ACCIDENT_TYPE_FIRE = 14;
var ACCIDENT_TYPE_OTHER = 15;
var ACCIDENT_TYPE_BACK_TO_FRONT = 17;
var ACCIDENT_TYPE_BACK_TO_SIDE = 18;
var ACCIDENT_TYPE_WITH_ANIMAL = 19;
var ACCIDENT_TYPE_WITH_VEHICLE_LOAD = 20;

var ICONS = {};
ICONS[SEVERITY_FATAL] = {};
ICONS[SEVERITY_SEVERE] = {};
ICONS[SEVERITY_LIGHT] = {};

ICONS[SEVERITY_FATAL][ACCIDENT_TYPE_CAR_TO_PEDESTRIAN] = "/static/img/icons/vehicle_person_lethal.png";
ICONS[SEVERITY_SEVERE][ACCIDENT_TYPE_CAR_TO_PEDESTRIAN] = "/static/img/icons/vehicle_person_severe.png";
ICONS[SEVERITY_LIGHT][ACCIDENT_TYPE_CAR_TO_PEDESTRIAN] = "/static/img/icons/vehicle_person_medium.png";
ICONS[SEVERITY_FATAL][ACCIDENT_TYPE_CAR_TO_CAR] = "/static/img/icons/vehicle_vehicle_lethal.png";
ICONS[SEVERITY_SEVERE][ACCIDENT_TYPE_CAR_TO_CAR] = "/static/img/icons/vehicle_vehicle_severe.png";
ICONS[SEVERITY_LIGHT][ACCIDENT_TYPE_CAR_TO_CAR] = "/static/img/icons/vehicle_vehicle_medium.png";
ICONS[SEVERITY_FATAL][ACCIDENT_TYPE_CAR_TO_OBJECT] = "/static/img/icons/vehicle_object_lethal.png";
ICONS[SEVERITY_SEVERE][ACCIDENT_TYPE_CAR_TO_OBJECT] = "/static/img/icons/vehicle_object_severe.png";
ICONS[SEVERITY_LIGHT][ACCIDENT_TYPE_CAR_TO_OBJECT] = "/static/img/icons/vehicle_object_medium.png";

var MULTIPLE_ICONS = {};
MULTIPLE_ICONS[SEVERITY_FATAL] = "/static/img/icons/multiple_lethal.png";
MULTIPLE_ICONS[SEVERITY_SEVERE] = "/static/img/icons/multiple_severe.png";
MULTIPLE_ICONS[SEVERITY_LIGHT] = "/static/img/icons/multiple_medium.png";
MULTIPLE_ICONS[SEVERITY_VARIOUS] = "/static/img/icons/multiple_various.png";

var ACCIDENT_MINOR_TYPE_TO_TYPE = { };
ACCIDENT_MINOR_TYPE_TO_TYPE[ACCIDENT_TYPE_CAR_TO_PEDESTRIAN]=ACCIDENT_TYPE_CAR_TO_PEDESTRIAN;
ACCIDENT_MINOR_TYPE_TO_TYPE[ACCIDENT_TYPE_FRONT_TO_SIDE]=ACCIDENT_TYPE_CAR_TO_CAR;
ACCIDENT_MINOR_TYPE_TO_TYPE[ACCIDENT_TYPE_FRONT_TO_REAR ]=ACCIDENT_TYPE_CAR_TO_CAR;
ACCIDENT_MINOR_TYPE_TO_TYPE[ACCIDENT_TYPE_SIDE_TO_SIDE]=ACCIDENT_TYPE_CAR_TO_CAR;
ACCIDENT_MINOR_TYPE_TO_TYPE[ACCIDENT_TYPE_FRONT_TO_FRONT]=ACCIDENT_TYPE_CAR_TO_CAR;
ACCIDENT_MINOR_TYPE_TO_TYPE[ACCIDENT_TYPE_WITH_STOPPED_CAR_NO_PARKING]=ACCIDENT_TYPE_CAR_TO_CAR;
ACCIDENT_MINOR_TYPE_TO_TYPE[ACCIDENT_TYPE_WITH_STOPPED_CAR_PARKING]=ACCIDENT_TYPE_CAR_TO_CAR;
ACCIDENT_MINOR_TYPE_TO_TYPE[ACCIDENT_TYPE_WITH_STILL_OBJECT]=ACCIDENT_TYPE_CAR_TO_OBJECT;
ACCIDENT_MINOR_TYPE_TO_TYPE[ACCIDENT_TYPE_OFF_ROAD_OR_SIDEWALK]=ACCIDENT_TYPE_CAR_TO_OBJECT;
ACCIDENT_MINOR_TYPE_TO_TYPE[ACCIDENT_TYPE_ROLLOVER]=ACCIDENT_TYPE_CAR_TO_OBJECT;
ACCIDENT_MINOR_TYPE_TO_TYPE[ACCIDENT_TYPE_SKID]=ACCIDENT_TYPE_CAR_TO_OBJECT;
ACCIDENT_MINOR_TYPE_TO_TYPE[ACCIDENT_TYPE_HIT_PASSSENGER_IN_CAR]=ACCIDENT_TYPE_CAR_TO_CAR;
ACCIDENT_MINOR_TYPE_TO_TYPE[ACCIDENT_TYPE_FALLING_OFF_MOVING_VEHICLE]=ACCIDENT_TYPE_CAR_TO_OBJECT;
ACCIDENT_MINOR_TYPE_TO_TYPE[ACCIDENT_TYPE_FIRE]=ACCIDENT_TYPE_CAR_TO_OBJECT;
ACCIDENT_MINOR_TYPE_TO_TYPE[ACCIDENT_TYPE_OTHER]=ACCIDENT_TYPE_CAR_TO_OBJECT;
ACCIDENT_MINOR_TYPE_TO_TYPE[ACCIDENT_TYPE_BACK_TO_FRONT]=ACCIDENT_TYPE_CAR_TO_CAR;
ACCIDENT_MINOR_TYPE_TO_TYPE[ACCIDENT_TYPE_BACK_TO_SIDE]=ACCIDENT_TYPE_CAR_TO_CAR;
ACCIDENT_MINOR_TYPE_TO_TYPE[ACCIDENT_TYPE_WITH_ANIMAL]=ACCIDENT_TYPE_CAR_TO_PEDESTRIAN;
ACCIDENT_MINOR_TYPE_TO_TYPE[ACCIDENT_TYPE_WITH_VEHICLE_LOAD]=ACCIDENT_TYPE_CAR_TO_CAR;

var DEFAULT_ICON = ICONS[1][1];

function getIcon(accidentType, severity) {
    var icon = DEFAULT_ICON;
    try {
        if (accidentType == "multiple") {
            icon = MULTIPLE_ICONS[severity];
        } else {
            icon = ICONS[severity][ACCIDENT_MINOR_TYPE_TO_TYPE[accidentType]];
        }
    } catch (err) {
        // stick to default icon
    }
    return icon;
}

var TYPE_STRING = [
    "",
    "תאונה",
    "הצעה",
    "עצומה"
];

var TYPES_MAP = {};
TYPES_MAP['Accident'] = TYPE_STRING[1];

var SEVERITY_MAP = {};
SEVERITY_MAP[SEVERITY_FATAL] = 'קטלנית';
SEVERITY_MAP[SEVERITY_SEVERE] = 'קשה';
SEVERITY_MAP[SEVERITY_LIGHT] = 'קלה';

var SUBTYPE_STRING = [
    "פגיעה בהולך רגל",
    "התנגשות חזית אל צד",
    "התנגשות חזית באחור",
    "התנגשות צד בצד",
    "התנגשות חזית אל חזית",
    "התנגשות עם רכב שנעצר ללא חניה",
    "התנגשות עם רכב חונה",
    "התנגשות עם עצם דומם",
    "ירידה מהכביש או עלייה למדרכה",
    "התהפכות",
    "החלקה",
    "פגיעה בנוסע בתוך כלי רכב",
    "נפילה ברכב נע",
    "שריפה",
    "אחר",
    "התנגשות אחור אל חזית",
    "התנגשות אחור אל צד",
    "התנגשות עם בעל חיים",
    "פגיעה ממטען של רכב"
    ];

$(function() {
    var AppRouter = Backbone.Router.extend({
        routes: {
            "" : "navigateEmpty",
            "/?marker=:id&start_date=:start&end_date=:end&show_fatal=:showFatal&show_severe=:showSevere&show_light=:showLight&show_inaccurate=:showInaccurate&zoom=:zoom&lat=:lat&lon=:lon" : "navigate"
        },
        navigate: function(id, start, end, showFatal, showSevere, showLight, showInaccurate, zoom, lat, lon) {
            app.model.set("currentMarker", parseInt(id));
            app.model.set("dateRange", [new Date(start), new Date(end)]);
            app.model.set("showFatal", showFatal);
            app.model.set("showSevere", showSevere);
            app.model.set("showLight", showLight);
            app.model.set("showInaccurateMarkers", showInaccurate != 0);
            app.map.setZoom(zoom);
            app.map.setCenter(new google.maps.LatLng(lat, lon));
        },
        navigateEmpty: function() {
            app.model.set("currentMarker", null);
        }
    });

    window.MarkerCollection = Backbone.Collection.extend({
        url : "/markers",

        parse: function(response, options) {
            return response.markers;
        }
    });

    window.AppView = Backbone.View.extend({
        el : $("#app"),
        events : {
            "click #map_canvas" : "clickMap",
            "click .fb-login" : "requireLogin",
            "click .fb-logout" : "logout",
            "click .download-csv" : "downloadCsv"
        },
        initialize : function() {
            _.bindAll(this, "clickContext");

            this.markers = new MarkerCollection();
            this.model = new Backbone.Model();
            this.markerList = [];

            this.markers
                .bind("reset", this.loadMarkers, this)
                .bind("destroy", this.loadMarkers, this)
                .bind("add", this.loadMarker, this)
                .bind("change:currentModel", this.chooseMarker, this);
            this.model
                .bind("change:user", this.updateUser, this)
                .bind("change:showFatal",
                    _.bind(this.reloadMarkersIfNeeded, this, "showFatal"))
                .bind("change:showSevere",
                    _.bind(this.reloadMarkersIfNeeded, this, "showSevere"))
                .bind("change:showLight",
                    _.bind(this.reloadMarkersIfNeeded, this, "showLight"))
                .bind("change:showInaccurateMarkers",
                    _.bind(this.reloadMarkersIfNeeded, this, "showInaccurateMarkers"))
                .bind("change:dateRange", this.reloadMarkers, this);
//            this.login(); // FIXME causes exceptions, but might be required for discussion
        },
        reloadMarkersIfNeeded: function(attr) {
            if (this.model.get(attr)) {
                this.reloadMarkers();
            } else {
                this.updateUrl();
                this.loadMarkers();
            }
        },
        updateUrl: function(url) {
            if (typeof url == 'undefined') {
                if (app.infoWindow) return;
                url = "/?" + this.getCurrentUrlParams();
            }
            Backbone.history.navigate(url, true);
        },
        zoomChanged: function() {
            var reset = this.map.zoom >= MINIMAL_ZOOM && this.previousZoom < MINIMAL_ZOOM;
            if (reset) {
                // zoomed back in from far away
                this.resetMarkers();
            }
            this.fetchMarkers(reset);
            this.previousZoom = this.map.zoom;
        },
        reloadMarkers: function() {
            this.clearMarkersFromMap();
            this.fetchMarkers();
        },
        fetchMarkers : function(reset) {
            if (!this.isReady) return;
            this.updateUrl();
            var params = this.buildMarkersParams();

            if (!this.markerList.length) {
                this.loadMarkers();
            }

            this.markers.fetch({
                data : $.param(params),
                reset: typeof reset !== 'undefined' && reset,
                success: function() {
                    var sidebarMarkers;
                    if (this.map.zoom >= MINIMAL_ZOOM) { // close enough
                        this.setMultipleMarkersIcon();
                        sidebarMarkers = this.markerList;
                    } else {
                        sidebarMarkers = [];
                    }
                    this.sidebar.updateMarkerList(sidebarMarkers);
                    this.chooseMarker();
                }.bind(this)
            });
        },
        buildMarkersParams : function() {
            var bounds = this.map.getBounds();
            var zoom = this.map.zoom;
            var dateRange = this.model.get("dateRange");

            var params = {};
            params["ne_lat"] = bounds.getNorthEast().lat();
            params["ne_lng"] = bounds.getNorthEast().lng();
            params["sw_lat"] = bounds.getSouthWest().lat();
            params["sw_lng"] = bounds.getSouthWest().lng();
            params["zoom"] = zoom;
            params["thin_markers"] = (zoom < MINIMAL_ZOOM || !bounds);
            // Pass start and end dates as unix time (in seconds)
            params["start_date"] = dateRange[0].getTime() / 1000;
            params["end_date"] = dateRange[1].getTime() / 1000;
            this.initLayers("all");
            params["show_fatal"] = this.model.get("showFatal");
            params["show_severe"] = this.model.get("showSevere");
            params["show_light"] = this.model.get("showLight");
            this.initShowInaccurate();
            params["show_inaccurate"] = this.model.get("showInaccurateMarkers");
            return params;
        },
        setMultipleMarkersIcon: function() {
            _.each(this.oms.markersNearAnyOtherMarker(), function(marker) {
                marker.icon = getIcon("multiple", SEVERITY_VARIOUS);
                marker.title = 'מספר תאונות בנקודה זו';
            });
        },
        downloadCsv: function() {
          params = this.buildMarkersParams();
          params["format"] = "csv";

          window.location = this.markers.url + "?" + $.param(params);
        },
        render : function() {
            this.isReady = false;

            this.defaultLocation = new google.maps.LatLng(INIT_LAT, INIT_LON);

            var mapOptions = {
                center: this.defaultLocation,
                zoom: INIT_ZOOM,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                mapTypeControl: false,
                zoomControl: !MAP_ONLY,
                panControl: !MAP_ONLY,
                streetViewControl: !MAP_ONLY,
                styles: MAP_STYLE
            };
            this.map = new google.maps.Map(this.$el.find("#map_canvas").get(0), mapOptions);

            var resetMapDiv = document.createElement('div');
            resetMapDiv.innerHTML = $("#reset-map-control").html();
            google.maps.event.addDomListener(resetMapDiv, 'click', function() {
                this.goToMyLocation();
            }.bind(this));
            this.map.controls[google.maps.ControlPosition.TOP_RIGHT].push(resetMapDiv);

            if (LOCATION_SPECIFIED) {
                if (!MARKER_ID) {
                    this.setCenterWithMarker(this.defaultLocation);
                }
            } else {
                this.goToMyLocation();
            }

            // search box:
            // Create the search box and link it to the UI element.
            var input = document.getElementById('pac-input');
            this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

            this.searchBox = new google.maps.places.SearchBox(input);

            google.maps.event.addListener(this.searchBox, 'places_changed', function() {
                this.handleSearchBox();
            }.bind(this));

            // Listen for the event fired when the user selects an item from the
            // pick list. Retrieve the matching places for that item.

            google.maps.event.addListener( this.map, "rightclick", _.bind(this.contextMenuMap, this) );
            google.maps.event.addListener( this.map, "mouseup", _.bind(this.fetchMarkers, this) );
            google.maps.event.addListener( this.map, "zoom_changed", _.bind(this.zoomChanged, this) );
            google.maps.event.addListenerOnce( this.map, 'idle', _.bind(this.fetchMarkers, this) );

            this.oms = new OverlappingMarkerSpiderfier(this.map, {markersWontMove: true, markersWontHide: true, keepSpiderfied: true});
            this.oms.addListener("click", function(marker, event) {
                marker.view.clickMarker();
                this.clickedMarker = true;
            }.bind(this));
            this.oms.addListener("spiderfy", function(markers) {
                this.closeInfoWindow();
                _.each(markers, function(marker){
                    marker.icon = marker.view.getIcon();
                    marker.title = marker.view.getTitle();
                });
                this.clickedMarker = true;
            }.bind(this));
            this.oms.addListener("unspiderfy", this.setMultipleMarkersIcon.bind(this));
            console.log('Loaded OverlappingMarkerSpiderfier');

            var mcOptions = {maxZoom: MINIMAL_ZOOM - 1, minimumClusterSize: 1};
            this.clusterer = new MarkerClusterer(this.map, [], mcOptions);
            console.log('Loaded MarkerClusterer');

            this.sidebar = new SidebarView({ map: this.map }).render();
            this.$el.find(".sidebar-container").append(this.sidebar.$el);
            console.log('Loaded SidebarView');

            if (!START_DATE) {
                START_DATE = '01/01/2013';
            }
            if (!END_DATE) {
                END_DATE = '01/01/2014';
            }
            this.$el.find("input.date-range").daterangepicker({
                    ranges: {
                      /* These ranges are irrelevant as long as no recent data is loaded:
                        'היום': ['today', 'today'],
                        'אתמול': ['yesterday', 'yesterday'],
                        'שבוע אחרון': [Date.today().add({ days: -6 }), 'today'],
                        'חודש אחרון': [Date.today().add({ days: -29 }), 'today'],
                        'החודש הזה': [Date.today().moveToFirstDayOfMonth(), Date.today().moveToLastDayOfMonth()],
                        'החודש שעבר': [Date.today().moveToFirstDayOfMonth().add({ months: -1 }), Date.today().moveToFirstDayOfMonth().add({ days: -1 })]
                        */
                        // FIXME change this hard-coded array into a table, see #122
                        'שנת 2013': ['01/01/2013', '01/01/2014'],
                        'שנת 2012': ['01/01/2012', '01/01/2013'],
                        'שנת 2011': ['01/01/2011', '01/01/2012'],
                        'שנת 2010': ['01/01/2010', '01/01/2011']
                    },
                    opens: 'left',
                    format: 'dd/MM/yyyy',
                    separator: ' עד ',
                    startDate: START_DATE,
                    endDate: END_DATE,
                    minDate: '01/01/2005',
                    maxDate: '31/12/2023',
                    locale: {
                        applyLabel: 'בחר',
                        fromLabel: 'מ',
                        toLabel: 'עד',
                        customRangeLabel: 'בחר תאריך',
                        daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr','Sa'],
                        monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                        firstDay: 1
                    },
                    showWeekNumbers: true,
                    buttonClasses: ['btn-danger']
                },
                function(start, end) {
                    var daterangepicker = this.$el.find("input.date-range").data("daterangepicker");
                    if (!start)
                        start = daterangepicker.minDate;
                    if (!end)
                        end = daterangepicker.maxDate;
                    this.model.set("dateRange", [start, end]);
                }.bind(this)
            );
            this.$el.find("#calendar-control").click( // only applies to <i>
                function() {
                    this.$el.find("input.date-range").data('daterangepicker').show();
                }.bind(this)
            );
            this.$el.find("input.date-range").data("daterangepicker").notify();
            console.log('Loaded daterangepicker');

            $(document).ajaxStart(function() {
                this.spinner = $('<li/>');
                this.spinner.height('20px');
                this.sidebar.$currentViewList.prepend(this.spinner);
                this.spinner.spin();
            }.bind(this));
            $(document).ajaxStop(function() {
                if (this.spinner) {
                    this.spinner.spin(false);
                }
            }.bind(this));
            console.log('Loaded spinner');

            this.previousZoom = this.map.zoom;

            this.router = new AppRouter();
            Backbone.history.start({pushState: true});
            console.log('Loaded AppRouter');

            this.isReady = true;

            return this;
        },
        goToMyLocation: function() {
            if (typeof this.myLocation !== 'undefined') {
                this.setCenterWithMarker(this.myLocation);
            } else if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    var latitude = position.coords.latitude;
                    var longitude = position.coords.longitude;
                    this.myLocation = new google.maps.LatLng(latitude, longitude);
                    this.setCenterWithMarker(this.myLocation);
                }.bind(this));
            } else {
                this.myLocation = this.defaultLocation;
                this.setCenterWithMarker(this.myLocation);
            }
        },
        closeInfoWindow: function() {
            if (app.infoWindow) {
                this.selectedMarker.unhighlight();
                this.selectedMarker = null;
                app.infoWindow.close();
                app.infoWindow = null;
                this.updateUrl();
            }
        },
        clickMap : function(e) {
            if (this.clickedMarker) {
                this.clickedMarker = false;
            } else {
                this.closeInfoWindow();
            }
        },
        initShowInaccurate: function () {
            var showInaccurate = this.model.get("showInaccurateMarkers");
            if (typeof showInaccurate == 'undefined') {
                this.model.set("showInaccurateMarkers", SHOW_INACCURATE);
                showInaccurate = SHOW_INACCURATE;
            }
            return showInaccurate;
        }, initLayers: function (severity) {
            if (severity == "all") {
                severities = [SEVERITY_FATAL, SEVERITY_SEVERE, SEVERITY_LIGHT];
            } else {
                severities = [severity];
            }
            for (var i = 0; i < severities.length; i++) {
                var attr = SEVERITY_ATTRIBUTES[severities[i]];
                var layer = this.model.get(attr);
                if (typeof layer == 'undefined') {
                    this.model.set(attr, LAYERS[severities[i]]);
                    layer = LAYERS[severities[i]];
                }
            }
            return layer;
        }, loadMarker : function(model) {
            for (var i = 0; i < this.markerList.length; i++) {
                if (this.markerList[i].model.attributes.id == model.attributes.id) {
                    return; // avoid adding duplicates
                }
            }

            // markers are loaded immediately as they are fetched
            var layer = this.initLayers(model.get("severity"));
            if (!layer) {
                return;
            }

            if (this.model.get("dateRange")) {
                var createdDate = new Date(model.get("created"));

                var start = this.model.get("dateRange")[0];
                var end = this.model.get("dateRange")[1];

                if (createdDate < start || createdDate > end) {
                    return;
                }
            }

            var showInaccurate = this.initShowInaccurate();
            if (!showInaccurate && model.get("locationAccuracy") != 1) {
                return;
            }

            var markerView = new MarkerView({model: model, map: this.map}).render();

            model.set("markerView", this.markerList.length);
            this.markerList.push(markerView);
        },

        loadMarkers : function() {
            this.clearMarkersFromMap();
            this.markers.each(_.bind(this.loadMarker, this));

            if (this.map.zoom >= MINIMAL_ZOOM)
                this.setMultipleMarkersIcon();

            this.sidebar.updateMarkerList(this.markerList);
            this.chooseMarker();
        },
        clearMarkersFromMap : function() {
            if (this.markerList) {
                _(this.markerList).each(_.bind(function(marker) {
                    marker.marker.setMap(null);
                }, this));
            }
            this.markerList = [];
            this.clusterer.clearMarkersFromMap();
        },
        resetMarkers : function() {
            this.clearMarkersFromMap();
            this.markers.reset();
        },
        chooseMarker: function() {
            if (!this.markerList.length) {
                return;
            }

            var currentMarker = this.model.get("currentMarker");
            if (!this.markers.get(currentMarker)) {
                this.updateUrl();
                return;
            }
            var markerView = this.markerList[this.markers.get(currentMarker).get("markerView")];
            if (!markerView) {
                // this.model.set("currentMarker", null);
                return;
            }

            markerView.choose();
            this.model.set("currentMarker", null);
        },
        contextMenuMap : function(e) {
            if (this.menu) {
                this.menu.remove();
            }
            this.menu = new ContextMenuView({
                items : [
                    {
                        icon : "plus-sign",
                        text : ADD_MARKER_OFFER,
                        callback : this.clickContext
                    }
                    /*,
                    {
                        icon : "plus-sign",
                        text : ADD_MARKER_PETITION,
                        callback : this.clickContext
                    }
                    */
                ]}).render(e);
        },
        clickContext : function(item, event) {
            this.requireLogin(_.bind(function() {
                this.openCreateDialog(item, event);
            }, this));
        },
        openCreateDialog : function(type, event) {
            if (this.createDialog) this.createDialog.close();
            this.createDialog = new MarkerDialog({
                type: type,
                event: event,
                markers: this.markers
            }).render();

        },
        requireLogin : function(callback) {
            if (this.model.get("user")) {
                if (typeof callback == "function") callback();
                return;
            }

            FB.getLoginStatus(_.bind(function(response) {
                if (response.status === 'connected') {
                    var uid = response.authResponse.userID;
                    var accessToken = response.authResponse.accessToken;

                    this.login(response.authResponse, callback);

                } else {
                    // the user is logged in to Facebook,
                    // but has not authenticated your app
                    FB.login(_.bind(function(response) {
                        if (response.authResponse) {
                            this.login(response.authResponse, callback);
                        } else {
                            // console.log('User cancelled login or did not fully authorize.');
                        }
                    }, this), {scope:"email"});
                }
            }, this));

        },
        login : function(authResponse, callback) {
            console.log("Logging in...");
            $.ajax({
                url: "/login",
                type: "post",
                data: JSON.stringify(authResponse),
                contentType: "application/json",
                traditional: true,
                dataType: "json",
                success: _.bind(function(user) {
                    if (user) {
                        this.model.set("user", user);
                        if (typeof callback == "function") callback();
                    }
                }, this),
                error: _.bind(function() {

                }, this)
            });
        },
        logout : function() {
            this.model.set("user", null);
            FB.logout();
        },
        updateUser : function() {
            var user = this.model.get("user");

            if (user) {
                this.$el.find(".fb-login").hide();

                this.$el.find(".user-details").show();
                this.$el.find(".profile-picture").attr("src", 'https://graph.facebook.com/' + user.facebook_id + '/picture');
                this.$el.find(".profile-name").text(user.first_name);

            } else {
                this.$el.find(".fb-login").show();
                this.$el.find(".user-details").hide();

            }
        },
        handleSearchBox : function() {
            var places = this.searchBox.getPlaces();
            if (places && places.length > 0) {
              var place = places[0];
              this.setCenterWithMarker(place.geometry.location);
              this.map.setZoom(INIT_ZOOM);
            }
         },
         setCenterWithMarker: function(loc) {
            this.closeInfoWindow();
            this.map.setCenter(loc);
            this.fetchMarkers();
            if (this.locationMarker) {
                this.locationMarker.setMap(null);
            }
            this.locationMarker = new google.maps.Marker({
              position: loc,
              map: this.map
            });
          },
          getCurrentUrlParams: function () {
            var dateRange = app.model.get("dateRange");
            var center = app.map.getCenter();
            return "start_date=" + moment(dateRange[0]).format("YYYY-MM-DD") +
                "&end_date=" + moment(dateRange[1]).format("YYYY-MM-DD") +
                "&show_fatal=" + (app.model.get("showFatal") ? 1 : 0) +
                "&show_severe=" + (app.model.get("showSevere") ? 1 : 0) +
                "&show_light=" + (app.model.get("showLight") ? 1 : 0) +
                "&show_inaccurate=" + (app.model.get("showInaccurateMarkers") ? 1 : 0) +
                "&zoom=" + app.map.zoom + "&lat=" + center.lat() + "&lon=" + center.lng();
		}
    });
});

