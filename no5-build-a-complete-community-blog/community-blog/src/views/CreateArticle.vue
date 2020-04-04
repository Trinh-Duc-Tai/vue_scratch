<template>
	<div class="container">
		<div class="row">
			<div class="col-md-8 offset-md-2">
				<div class="card my-5">
					<div class="card-body">
						<picture-input
							ref="pictureInput"
							accept="image/jpeg,image/png"
							size="5"
							button-class="btn btn-danger"
							@change="onChange"
						/>
						<select class="form-control my-4" v-model="category">
							<option selected>Select a Category</option>
							<option
								:value="category.id"
								v-for="category in categories"
								:key="category.id"
							>
								{{ category.name }}
							</option>
						</select>
						<input
							type="text"
							placeholder="Title"
							v-model="title"
							class="my-3 form-control"
						/>
						<wysiwyg v-model="content" />
						<div class="text-center">
							<button :disabled="loading" @click="createArticle()" class="btn-success btn-lg mt-3">
								<i class="fas fa-spin fa-spinner" v-if="loading"></i>
								{{ loading ? "" : "Create Category" }}
							</button>
						</div>
					</div>
					<!-- het card body  -->
				</div>
				<!-- het card  -->
			</div>
			<!-- het col-md-8 offset-md-2  -->
		</div>
		<!-- het row  -->
	</div>
</template>

<script>
import Axios from "axios";
import PictureInput from "vue-picture-input";
import config from "@/config";

export default {
	beforeRouteEnter(to, from, next) {
		if (!localStorage.getItem("auth")) {
			return next({ path: "/login" });
		}

		next();
	},
	mounted() {
		this.getCategories();
	},
	components: {
		PictureInput,
	},
	data() {
		return {
			title: "",
			content: "",
			image: null,
			categories: [],
			category: "",
			loading: false,
		};
	},
	methods: {
		onChange(image) {
			this.image = image;
		},
		createArticle() {
      if(!this.title || !this.image || !this.category || !this.content){
        this.$noty.error('Please fill in all fields.');
        return;
      }
			this.loading = true;
			const form = new FormData();
			form.append("file", this.image);
			// bahd
			// form.append('upload_preset', 'g5ziunzg');
			// đang lấy api key của bahd
			// form.append('api_key', '132255634713478');
			//dang upload lên api của bahd
			// Axios.post(
			// 	"https://api.cloudinary.com/v1_1/bahdcoder/image/upload",
			// 	form
			// ).then((res) => console.log(res));

			// taitd
			// mấy cái này: khbudpmt 479587781157296 https://api.cloudinary.com/v1_1/taitd040997/image/upload
			// đều lấy ở https://cloudinary.com/
			form.append("upload_preset", "khbudpmt");
			form.append("api_key", "479587781157296");
			// upload của mình
			Axios.post(
				"https://api.cloudinary.com/v1_1/taitd040997/image/upload",
				form
			)
				.then((res) =>
					Axios.post(
						`${config.apiUrl}/articles`,
						{
							title: this.title,
							content: this.content,
							category_id: this.category,
							imageUrl: res.data.secure_url,
						},
						{
							headers: {
								Authorization: `Bearer ${this.$root.auth.token}`,
							},
						}
					)
						.then(() => {
							this.loading = false;
							this.$noty.success("Article created successfully.");
							this.$router.push("/");
						})
						.catch(() => {
							this.loading = false;
							this.$noty.error("Oops ! Something went wrong.");
						})
				)
				.catch(() => {
					this.loading = false;
					this.$noty.error("Oops ! Something went wrong.");
				});
		},

		getCategories() {
			const categories = localStorage.getItem("categories");

			if (categories) {
				this.categories = JSON.parse(categories);
				return;
			}
			Axios.get(`${config.apiUrl}/categories`).then((res) => {
				// this.categories = res.data;
				this.categories = res.data.categories;
				localStorage.setItem("categories", JSON.stringify(this.categories));
			});
		},
	},
};
</script>
