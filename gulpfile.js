var gulp=require("gulp");

gulp.task("copyHTML",function(){
	gulp.src("*.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\gitGulp"));
});

gulp.task("copyCSS",function(){
	gulp.src("css/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\gitGulp\\css"));
});

gulp.task("copyJS",function(){
	gulp.src("js/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\gitGulp\\js"));
});

gulp.task("copyIMG",function(){
	gulp.src("img/*.{png,jpg,git}").pipe(gulp.dest("D:\\phpStudy\\WWW\\gitGulp\\img"));
});

gulp.task("build",["copyHTML","copyCSS","copyJS","copyIMG"],function(){
	console.log("ok");
});


gulp.task("watchall",function(){
	gulp.watch("*.html",["copyHTML"]);
	gulp.watch("css/**/*",["copyCSS"]);
	gulp.watch("js/**/*",["copyJS"]);
	gulp.watch("img/*.{png,jpg,git}",["copyIMG"]);
	
});
