
/**
 * Class toolbar
 * DVHAI 06/06/2021
 */
 class Dropdown {
    constructor(dropdownId) {
        let me = this;

        me.Toolbar = $(`${dropdownId}`);

        //khởi tạo các sự kiện trên toolbar
        me.initEvents();

        //readonly cho dropdown-box
        me.Toolbar.find(".dropdown-box").prop('readonly', true);
    }

    /**
     * Hàm chứa các sự kiện trên dropdown
     * DVHAI 06/06/2021
     */
    initEvents() {
        let me = this;

        //Các event trong dropdown: keyup,click
        me.eventDropdown();
    }

    /**
     * Hàm sự kiện drodown
     * DVHAI 06/06/2021
     */
    eventDropdown() {
        let me = this;

        me.dropdownHeadClick();

        me.dropdownRowClick();

        // me.dropdownKeyup();
    }
    
    /**
     * hiển thị dropdown
     * click vào item có type=dropdown
     * hiển thị dropdown ngay bên dưới
     * DVHAI 06/06/2021
     */
     dropdownHeadClick() {
        let me = this;

        me.Toolbar.find("[type=dropdown]").on("click", function () {
            me.toggleDropdown($(this));
        });
    }

    /**
     * hiển thị dropdown
     * click vào item có type=dropdown
     * hiển thị dropdown ngay bên dưới
     * DVHAI 06/06/2021
     */
    toggleDropdown(me) {
        me.next().slideToggle("fast");
        me.toggleClass("rotate");
    }


     /**
     * Hiển thị giá trị sau khi click vào row
     * DVHAI 06/06/2021
     */
    dropdownRowClick() {
        let me = this;

        me.Toolbar.find("[row]").on("click", function () {
            let value = $(this).find("span").text();

            //set value cho dropdown khi click
            $(this).parent().parent().find("[type=dropdown]").val(value);
            
            //xoay icon arrow
            $(this).parent().parent().find("[type=dropdown]").toggleClass("rotate");

            //chọn xong thì cuộn lên
            $(this).parent().slideToggle();

            //selected dropdown row
            //Xóa tất cả thuộc tính selected 
            $(this).parent().find("[row]").removeClass("dropdown__row--selected");
            //thêm lại cho thằng được click
            $(this).addClass("dropdown__row--selected");
            //thêm dấu tích bằng các show icon
            $(this).parent().find("svg").hide();
            $(this).find("svg").show();

            //ẩn hiện dấu x khi 1 row được chọn
            $(this).parent().parent().find("[type=dropdown]").addClass("dropdown-bg-size");
        });
    }



    dropdownKeyup() {
        let me =  this;

        me.Toolbar.on("change", "input", function(){
            
        });
    }
}


var dropdown = new Dropdown(".dropdown__key");