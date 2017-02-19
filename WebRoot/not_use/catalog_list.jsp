<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<%@ taglib uri="http://java.sun.com/jstl/core_rt" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML>
<html>
<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=utf-8" /><!-- /Added by HTTrack -->
<head>
  <meta charset="UTF-8">

  <link rel="shortcut icon" href="images/favicon.html">
  <meta name="description" content="">
  <meta name="keywords" content="">

  <title>Catalog (list type view)</title>

  <link rel="shortcut icon" href="favicon.ico">
  <link href="css/style.css" media="screen" rel="stylesheet" type="text/css">
  <link href="css/grid.css" media="screen" rel="stylesheet" type="text/css">
 
  <script src="js/jquery-1.7.2.min.js" ></script>
  <script src="js/html5.js" ></script>
  <script src="js/jflow.plus.js" ></script>
  <script src="js/jquery.carouFredSel-5.2.2-packed.js"></script>
  <script src="js/checkbox.js"></script>
  <script src="js/radio.js"></script>
  <script src="js/selectBox.js"></script>

  <script>
	$(document).ready(function() {
		$("select").selectBox();
	});
  </script>

  <script>
	$(document).ready(function(){
	    $("#myController").jFlow({
			controller: ".control", // must be class, use . sign
			slideWrapper : "#jFlowSlider", // must be id, use # sign
			slides: "#slider",  // the div where all your sliding divs are nested in
			selectedWrapper: "jFlowSelected",  // just pure text, no sign
			width: "984px",  // this is the width for the content-slider
			height: "480px",  // this is the height for the content-slider
			duration: 400,  // time in miliseconds to transition one slide
			prev: ".slidprev", // must be class, use . sign
			next: ".slidnext", // must be class, use . sign
			auto: true	
		});
	});
  </script>
  <script>
	$(function() {
	  $('#list_product').carouFredSel({
		prev: '#prev_c1',
		next: '#next_c1',
		auto: false
	  });
          $('#list_product2').carouFredSel({
		prev: '#prev_c2',
		next: '#next_c2',
		auto: false
	  });
	  $(window).resize();
	});
  </script>
  <script>
       $(document).ready(function(){
	      $("button").click(function(){
		     $(this).addClass('click')
	      });             
       })
  </script>
    
 </head>
<body>
  <div class="container_12">
    <div id="top">
      <div class="grid_3">
        <div class="phone_top">
          Call Us +777 (100) 1234
        </div><!-- .phone_top -->
      </div><!-- .grid_3 -->
   
      <div class="grid_6">
        <div class="welcome">
          Welcome visitor you can <a href="login.jsp">login</a> or <a href="login.html">create an account</a>.
        </div><!-- .welcome -->
      </div><!-- .grid_6 -->
   
      <div class="grid_3">
        <div class="valuta">
          <ul>
            <li class="curent"><a href="#">$</a></li>
            <li><a href="#">&#8364;</a></li>
            <li><a href="#">&#163;</a></li>
          </ul>
        </div><!-- .valuta -->
    
        <div class="lang">
          <ul>
            <li class="curent"><a href="#">EN</a></li>
            <li><a href="#">FR</a></li>
            <li><a href="#">GM</a></li>
          </ul>
        </div><!-- .lang -->
      </div><!-- .grid_3 -->
    </div><!-- #top -->
  
    <div class="clear"></div>
   
    <header id="branding">
      <div class="grid_3">
        <hgroup>
          <h1 id="site_logo"><a href="index.jsp" title=""><img src="images/logo.png" alt="E-Mall Logo"/></a></h1>
          <h2 id="site_description">E-Mall</h2>
        </hgroup>
      </div><!-- .grid_3 -->
      
      <div class="grid_3">
        <form class="search">
          <input type="text" name="search" class="entry_form" value="" placeholder="Search entire store here..."/>
	      <input type="submit" name="btn_findGoods" value="搜索"size=20/>
	    </form>
      </div><!-- .grid_3 -->
      
      <div class="grid_6">
        <ul id="cart_nav">
          <li>
            <a class="cart_li" href="#">Cart <span>$0.00</span></a>
            <ul class="cart_cont">
              <li class="no_border"><p>最近添加的商品</p></li>
              <c:forEach items="${cartList_R}" var="goods_order">
	              <li>
	                <a href="searchGoodsByIdAction?goods_id=${goods_order.goods.goods_id}" class="prev_cart"><div class="cart_vert"><img src="images/goods-image/w-clothes/dress/${goods_order.goods.goods_image}" alt="" title="" /></div></a>
	                <div class="cont_cart">
	                  <h4>${goods_order.goods.goods_name}</h4>
	                  <div class="price">${goods_order.order.count} x ${goods_order.goods.goods_price}</div>
	                </div>
	                <a title="close" class="close" href="#"></a>
	                <div class="clear"></div>
	              </li>
              </c:forEach>
	      <li class="no_border">
		<a href="shopping_cart.jsp" class="view_cart">View shopping cart</a>
		<a href="checkout.jsp" class="checkout">Procced to Checkout</a>
	      </li>
            </ul>
          </li>
        </ul>
        
        <nav class="private">
          <ul>
            <li><a href="#">My Account</a></li>
		<li class="separator">|</li>
            <li><a href="#">My Wishlist</a></li>
		<li class="separator">|</li>
            <li><a href="login.html">Log In</a></li>
		<li class="separator">|</li>
            <li><a href="login.html">Sign Up</a></li>
          </ul>
        </nav><!-- .private -->        
      </div><!-- .grid_6 -->
    </header><!-- #branding -->
  </div><!-- .container_12 -->
  
  <div class="clear"></div>
  
  <div class="clear"></div>
  
  <div class="container_12">
    <div class="grid_12">
       <div class="breadcrumbs">
	      <a href="index.jsp">Home</a><span>&#8250;</span><a href="#">${parent_type_name}</a><span>&#8250;</span><span class="current">${type_name}</span>
       </div><!-- .breadcrumbs -->
    </div><!-- .grid_12 -->
  </div><!-- .container_12 -->
  
  <div class="clear"></div>
  
  <section id="main">
    <div class="container_12">
       <div id="sidebar" class="grid_3">
	      <aside id="categories_nav">
		     <h3>Categories</h3>
		     
		     <nav class="left_menu">
			    <ul>
				   <li><a href="#">Solids <span>(21)</span></a></li>
				   <li><a href="#">Liquids <span> (27)</span></a></li>
				   <li><a href="#">Spray <span>(33)</span></a></li>
				   <li><a href="#">Electric <span>(17)</span></a></li>
				   <li><a href="#">For Cars <span>(23)</span></a></li>
				   <li><a href="#">For Room <span>(7)</span></a></li>
				   <li class="last"><a href="#">Other <span>(135)</span></a></li>
			    </ul>
		     </nav><!-- .left_menu -->
	      </aside><!-- #categories_nav -->
	      
	      <aside id="shop_by">
		     <h3>Shop By</h3>
		     
		     <div class="currently_shopping">
			    <p>Currently Shopping by:</p>
			    <ul>
				   <li><a title="close" class="close" href="#"></a>Price: <span>$0.00 - $999.99</span></li>
				   <li><a title="close" class="close" href="#"></a>Manufacturer: <span>Apple</span></li>
			    </ul>
			    
			    <a class="clear_all" href="#">Clear All</a>
			    
			    <div class="clear"></div>
		     </div><!-- .currently_shopping -->
		     
		     <h4>Category</h4>
		     
		     <form action="#" class="check_opt">
			    <p><input class="niceCheck" type="checkbox" >For Home (23)</p>
			    <p><input class="niceCheck" type="checkbox" name="" value="">For Car (27)</p>
			    <p><input class="niceCheck" type="checkbox" name="" value="">For Office (9)</p>
		     </form>
		     
		     <h4>Price</h4>
		     
		     <form action="#" class="check_opt">
			    <p><input class="niceCheck" type="checkbox" name="" value="">0.00 - $49.99 (21)</p>
			    <p><input class="niceCheck" type="checkbox" name="" value="">$50.00 - $99.99 (7)</p>
			    <p><input class="niceCheck" type="checkbox" name="" value="">0$100.00 and above (15)</p>
		     </form>
	      </aside><!-- #shop_by -->
	      
	      <aside id="specials" class="specials">
		     <h3>Specials</h3>
		     
		     <ul>
			    <li>
				   <div class="prev">
					  <a href="product_page.html"><img src="images/special1.png" alt="" title="" /></a>
				   </div>
				   
				   <div class="cont">
					  <a href="product_page.html">Honeysuckle Flameless Luminary Refill</a>
					  <div class="prise"><span class="old">$177.00</span>$75.00</div>
				   </div>   
			    </li>
			    
			    <li>
				   <div class="prev">
					  <a href="product_page.html"><img src="images/special2.png" alt="" title="" /></a>
				   </div>
				   
				   <div class="cont">
					  <a href="product_page.html">Honeysuckle Flameless Luminary Refill</a>
					  <div class="prise"><span class="old">$177.00</span>$75.00</div>
				   </div>   
			    </li>
		     </ul>
	      </aside><!-- #specials -->
	      
	      <aside id="newsletter_signup">
		     <h3>Newsletter Signup</h3>
		     <p>Phasellus vel ultricies felis. Duis 
		     rhoncus risus eu urna pretium.</p>
		     
		     <form class="newsletter">
			    <input type="email" name="newsletter" class="your_email" value="" placeholder="Enter your email address..."/>
			    <input type="submit" id="submit" value="Subscribe" />
		     </form>
	      </aside><!-- #newsletter_signup -->
       </div><!-- .sidebar -->
      
       <div id="content" class="grid_9">
	      <h1 class="page_title">Product List</h1>
	      
	      <div class="options">
		     <div class="grid-list">
			   <a class="grid" href="catalog_grid.html"><span>img</span></a>
			   <a class="list curent" href="index.html"><span>img</span></a>
		     </div><!-- .grid-list -->
		     
		     <div class="show">
			    Show
			    <select>
				   <option>1</option>
				   <option>2</option>
				   <option>3</option>
				   <option>4</option>
				   <option>5</option>
				   <option>6</option>
				   <option>7</option>
				   <option>8</option>
				   <option>9</option>
				   <option>10</option>
				   <option>11</option>
				   <option>12</option>
			     </select>
			    
			    per page
		     </div><!-- .show -->
		     
		     <div class="sort">
			   Sort By
			    <select>
				   <option>Position</option>
				   <option>Price</option>
				   <option>Rating</option>
				   <option>Name</option>
			     </select>
			    
			    <a class="sort_up" href="#">&#8593;</a>
		     </div><!-- .sort -->
	      </div><!-- .options -->
	      
	      <div class="listing_product">
			<div class="product_li">
				<div class="grid_3">
					<img class="sale" src="images/new.png" alt="New"/>
					<div class="prev">
						<a href="product_page.html"><img src="images/product_1.png" alt="" title="" /></a>
					</div><!-- .prev -->
				</div><!-- .grid_3 -->
				
				<div class="grid_4">
					<div class="entry_content">
						<a href="product_page.html"><h3 class="title">Beanpod Candles Orange Vanilla, Tea Light</h3></a>
						<div class="review">
							<a class="plus" href="#"></a>
							<a class="plus" href="#"></a>
							<a class="plus" href="#"></a>
							<a href="#"></a>
							<a href="#"></a>
							<span>1 REVIEW(S)</span>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra faucibus congue. Aenean luctus dolor et purus malesuada luctus. Quisque ullamcorper ante viverra lectus fermentum quis rutrum erat sollicitudin. Fusce tortor massa.</p>
						<a class="more" href="product_page.html">Learn More</a>
					</div><!-- .entry_content -->
				</div><!-- .grid_4 -->
				
				<div class="grid_2">
					<div class="cart">
						<div class="price">
							<div class="price_new">$550.00</div>
							<div class="price_old">$725.00</div>
						</div>
						<a href="#" class="bay">Add to Cart</a>
						<a href="#" class="obn"></a>
						<a href="#" class="like"></a>
					</div><!-- .cart -->
				</div><!-- .grid_2 -->
				
				<div class="clear"></div>
			</div><!-- .article -->
			
			<div class="product_li">
				<div class="grid_3">
					<img class="sale" src="images/sale.png" alt="Sale"/>
					<div class="prev">
						<a href="product_page.html"><img src="images/product_2.png" alt="" title="" /></a>
					</div><!-- .prev -->
				</div><!-- .grid_3 -->
				
				<div class="grid_4">
					<div class="entry_content">
						<a href="product_page.html"><h3 class="title">Beanpod Candles Orange Vanilla, Tea Light</h3></a>
						<div class="review">
							<a class="plus" href="#"></a>
							<a class="plus" href="#"></a>
							<a class="plus" href="#"></a>
							<a href="#"></a>
							<a href="#"></a>
							<span>1 REVIEW(S)</span>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra faucibus congue. Aenean luctus dolor et purus malesuada luctus. Quisque ullamcorper ante viverra lectus fermentum quis rutrum erat sollicitudin. Fusce tortor massa.</p>
						<a class="more" href="product_page.html">Learn More</a>
					</div><!-- .entry_content -->
				</div><!-- .grid_4 -->
				
				<div class="grid_2">
					<div class="cart">
						<div class="price">
							<div class="price_new">$550.00</div>
						</div>
						<a href="#" class="bay">Add to Cart</a>
						<a href="#" class="obn"></a>
						<a href="#" class="like"></a>
					</div><!-- .cart -->
				</div><!-- .grid_2 -->
				
				<div class="clear"></div>
			</div><!-- .article -->
			
			<div class="product_li">
				<div class="grid_3">
					<img class="sale" src="images/top.png" alt="Top"/>
					<div class="prev">
						<a href="product_page.html"><img src="images/product_3.png" alt="" title="" /></a>
					</div><!-- .prev -->
				</div><!-- .grid_3 -->
				
				<div class="grid_4">
					<div class="entry_content">
						<a href="product_page.html"><h3 class="title">Beanpod Candles Orange Vanilla, Tea Light</h3></a>
						<div class="review">
							<a class="plus" href="#"></a>
							<a class="plus" href="#"></a>
							<a class="plus" href="#"></a>
							<a href="#"></a>
							<a href="#"></a>
							<span>1 REVIEW(S)</span>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra faucibus congue. Aenean luctus dolor et purus malesuada luctus. Quisque ullamcorper ante viverra lectus fermentum quis rutrum erat sollicitudin. Fusce tortor massa.</p>
						<a class="more" href="product_page.html">Learn More</a>
					</div><!-- .entry_content -->
				</div><!-- .grid_4 -->
				
				<div class="grid_2">
					<div class="cart">
						<div class="price">
							<div class="price_new">$550.00</div>
							<div class="price_old">$725.00</div>
						</div>
						<a href="#" class="bay">Add to Cart</a>
						<a href="#" class="obn"></a>
						<a href="#" class="like"></a>
					</div><!-- .cart -->
				</div><!-- .grid_2 -->
				
				<div class="clear"></div>
			</div><!-- .article -->
			
			<div class="product_li">
				<div class="grid_3">
					<div class="prev">
						<a href="product_page.html"><img src="images/product_4.png" alt="" title="" /></a>
					</div><!-- .prev -->
				</div><!-- .grid_3 -->
				
				<div class="grid_4">
					<div class="entry_content">
						<a href="product_page.html"><h3 class="title">Beanpod Candles Orange Vanilla, Tea Light</h3></a>
						<div class="review">
							<a class="plus" href="#"></a>
							<a class="plus" href="#"></a>
							<a class="plus" href="#"></a>
							<a href="#"></a>
							<a href="#"></a>
							<span>1 REVIEW(S)</span>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra faucibus congue. Aenean luctus dolor et purus malesuada luctus. Quisque ullamcorper ante viverra lectus fermentum quis rutrum erat sollicitudin. Fusce tortor massa.</p>
						<a class="more" href="product_page.html">Learn More</a>
					</div><!-- .entry_content -->
				</div><!-- .grid_4 -->
				
				<div class="grid_2">
					<div class="cart">
						<div class="price">
							<div class="price_new">$550.00</div>
							<div class="price_old">$725.00</div>
						</div>
						<a href="#" class="bay">Add to Cart</a>
						<a href="#" class="obn"></a>
						<a href="#" class="like"></a>
					</div><!-- .cart -->
				</div><!-- .grid_2 -->
				
				<div class="clear"></div>
			</div><!-- .article -->
			
			<div class="product_li">
				<div class="grid_3">
					<img class="sale" src="images/new.png" alt="New"/>
					<div class="prev">
						<a href="product_page.html"><img src="images/product_5.png" alt="" title="" /></a>
					</div><!-- .prev -->
				</div><!-- .grid_3 -->
				
				<div class="grid_4">
					<div class="entry_content">
						<a href="product_page.html"><h3 class="title">Beanpod Candles Orange Vanilla, Tea Light</h3></a>
						<div class="review">
							<a class="plus" href="#"></a>
							<a class="plus" href="#"></a>
							<a class="plus" href="#"></a>
							<a href="#"></a>
							<a href="#"></a>
							<span>1 REVIEW(S)</span>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra faucibus congue. Aenean luctus dolor et purus malesuada luctus. Quisque ullamcorper ante viverra lectus fermentum quis rutrum erat sollicitudin. Fusce tortor massa.</p>
						<a class="more" href="product_page.html">Learn More</a>
					</div><!-- .entry_content -->
				</div><!-- .grid_4 -->
				
				<div class="grid_2">
					<div class="cart">
						<div class="price">
							<div class="price_new">$550.00</div>
							<div class="price_old">$725.00</div>
						</div>
						<a href="#" class="bay">Add to Cart</a>
						<a href="#" class="obn"></a>
						<a href="#" class="like"></a>
					</div><!-- .cart -->
				</div><!-- .grid_2 -->
				
				<div class="clear"></div>
			</div><!-- .article -->
			
			<div class="product_li">
				<div class="grid_3">
					<div class="prev">
						<a href="product_page.html"><img src="images/product_6.png" alt="" title="" /></a>
					</div><!-- .prev -->
				</div><!-- .grid_3 -->
				
				<div class="grid_4">
					<div class="entry_content">
						<a href="product_page.html"><h3 class="title">Beanpod Candles Orange Vanilla, Tea Light</h3></a>
						<div class="review">
							<a class="plus" href="#"></a>
							<a class="plus" href="#"></a>
							<a class="plus" href="#"></a>
							<a href="#"></a>
							<a href="#"></a>
							<span>1 REVIEW(S)</span>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra faucibus congue. Aenean luctus dolor et purus malesuada luctus. Quisque ullamcorper ante viverra lectus fermentum quis rutrum erat sollicitudin. Fusce tortor massa.</p>
						<a class="more" href="product_page.html">Learn More</a>
					</div><!-- .entry_content -->
				</div><!-- .grid_4 -->
				
				<div class="grid_2">
					<div class="cart">
						<div class="price">
							<div class="price_new">$550.00</div>
							<div class="price_old">$725.00</div>
						</div>
						<a href="#" class="bay">Add to Cart</a>
						<a href="#" class="obn"></a>
						<a href="#" class="like"></a>
					</div><!-- .cart -->
				</div><!-- .grid_2 -->
				
				<div class="clear"></div>
			</div><!-- .article -->
	    
	      <div class="clear"></div>
	      </div><!-- .listing_product -->
	      
	      <div class="clear"></div>
	      
	      <div class="pagination">
		     <ul>
			    <li class="prev"><span>&#8592;</span></li>
			    <li class="curent"><a href="#">1</a></li>
			    <li><a href="#">2</a></li>
			    <li><a href="#">3</a></li>
			    <li><a href="#">4</a></li>
			    <li><a href="#">5</a></li>
			    <li><span>...</span></li>
			    <li><a href="#">100</a></li>
			    <li class="next"><a href="#">&#8594;</a></li>
		     </ul>
	      </div><!-- .pagination -->
	      <p class="pagination_info">Displaying 1 to 12 (of 100 products)</p>
       </div><!-- #content -->
       
      <div class="clear"></div>
      
    </div><!-- .container_12 -->
  </section><!-- #main -->
  
  <div class="clear"></div>
    
  <footer>
    <div class="f_navigation">
      <div class="container_12">
        <div class="grid_3">
          <h3>Contact Us</h3>
          <ul class="f_contact">
            <li>49 Archdale, 2B Charlestone</li>
            <li>+777 (100) 1234</li>
            <li>mail@example.com</li>
          </ul><!-- .f_contact -->
        </div><!-- .grid_3 -->
      
        <div class="grid_3">
          <h3>Information</h3>
          <nav class="f_menu">
            <ul>
              <li><a href="#">About As</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Secure payment</a></li>
            </ul>
          </nav><!-- .private -->
        </div><!-- .grid_3 -->
        
        <div class="grid_3">
          <h3>Costumer Servise</h3>
          <nav class="f_menu">
            <ul>
              <li><a href="contact_us.html">Contact As</a></li>
              <li><a href="#">Return</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Site Map</a></li>
            </ul>
          </nav><!-- .private -->
        </div><!-- .grid_3 -->
        
        <div class="grid_3">
          <h3>My Account</h3>
          <nav class="f_menu">
            <ul>
              <li><a href="#">My Account</a></li>
              <li><a href="#">Order History</a></li>
              <li><a href="#">Wish List</a></li>
              <li><a href="#">Newsletter</a></li>
            </ul>
          </nav><!-- .private -->
        </div><!-- .grid_3 -->
        
        <div class="clear"></div>
      </div><!-- .container_12 -->
    </div><!-- .f_navigation -->
    
    <div class="f_info">
      <div class="container_12">
        <div class="grid_6">
          <p class="copyright">Â© Breeze Store Theme, 2013. Collect from <a href="http://www.17sucai.com/" title="ç½é¡µæ¨¡æ¿" target="_blank">ç½é¡µæ¨¡æ¿</a></p>
        </div><!-- .grid_6 -->
        
        <div class="grid_6">
          <div class="soc">
            <a class="google" href="#"></a>
            <a class="twitter" href="#"></a>
            <a class="facebook" href="#"></a>
          </div><!-- .soc -->
        </div><!-- .grid_6 -->
        
        <div class="clear"></div>
      </div><!-- .container_12 -->
    </div><!-- .f_info -->
  </footer>
 
</body>
<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=utf-8" /><!-- /Added by HTTrack -->
</html>