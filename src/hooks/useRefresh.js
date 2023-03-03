import { useRouter } from "next/router"

const useRefresh = () => {
	const router = useRouter()
	router.reload(window.location.pathname)
}

export default useRefresh
