var version = '1.0.1';
var version_date = 'June 24, 2020';

//set default degree (360*6)
var degree = 1800;

//number of clicks = 0
var clicks = 0;

Number.prototype.formatNumber = function() { return this.toFixed(2).toString().split(/[-.]/).reverse().reduceRight(function(t, c, i) { return (i == 2) ? '-' + t : (i == 1) ? t + c.replace(/(\d)(?=(\d{3})+$)/g, '$1,') : t; }, ''); }

$(document).ready(function() {

    var wheel_spinning = 0;

    /* WHEEL SPIN FUNCTION */
    $('#spin').click(function() {
        spinTheWheel();
    });

    function spinTheWheel() {

        if (wheel_spinning == 1) { // if the wheel is spinning, don't do anything; this is to avoid multiple spin hack!
            //console.log('wheel_spinning[1] : '+wheel_spinning)
            //return;
        }


        var wonItemId = (Math.floor(Math.random() * 12) + 1);

        //alert('{stw} wonItem : '+wonItemId)
        $('#weapon_to_select').val(wonItemId);


        //add 1 every click
        clicks++;

        /*
         * 	
         * multiply the degree by number of clicks
         * generate random number between 1 - 360,
         * then add to the new degree
         */
        var newDegree = degree * clicks;

        var random = parseInt($('#weapon_to_select').val()) - 1; // keep the weapon number - 1 here

        console.log('item : ' + random);

        var selectedWeaponNumber = 1000 + (random + 1);

        var extraDegree = random * 30;

        totalDegree = newDegree + extraDegree;

        var selectedWeapon = 'images/rewards2/' + selectedWeaponNumber + '.png';

        console.log('selectedWeapon : ' + selectedWeapon);

        $('.inner-spin-hover-effect').css('background-image', 'url("https://z8games.akamaized.net/cfna/web/main/wof/hive/wheel-innerlight.png")');

        /*
         * let's make the spin btn to tilt every
         * time the edge of the section hits
         * the indicator
         **/
        $('#wheel .sec').each(function() {
            var t = $(this);
            var noY = 0;

            var c = 0;
            var n = 500;
            var interval = setInterval(function() {
                c++;

                var aoY = t.offset().top;
                $("#txt").html(aoY);
                //console.log(aoY);

                /*
                 *	23.7 is the minimum offset number that 
                 *	each section can get, in a 30 angle degree. 
                 * 	So, if the offset reaches 23.7, then we know
                 * 	that it has a 30 degree angle and therefore,
                 * 	exactly aligned with the spin btn
                 */
                if (aoY < 23.89) {
                    //console.log('<<<<<<<<');
                    $('#spin').addClass('spin');
                    setTimeout(function() {
                        $('#spin').removeClass('spin');
                    }, 100);
                }

                wheel_spinning = 1;
                //console.log('wheel_spinning[2] : '+wheel_spinning)

            }, 10);

            wheel_spinning = 0;
            //console.log('wheel_spinning[3] : '+wheel_spinning)

            $('#inner-wheel').css({
                'transform': 'rotate(' + -totalDegree + 'deg)'
            });
            noY = t.offset().top;
        });

        wheel_spinning = 0;
        //console.log('wheel_spinning[4] : '+wheel_spinning)
    }

    function wait(ms) {
        var start = new Date().getTime();
        var end = start;
        while (end < start + ms) {
            end = new Date().getTime();
        }
    }

}); //DOCUMENT READY