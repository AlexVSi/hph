import classes from './LinkButton.module.scss'
export const LinkButton = ({target='_self', link, children}) => {
	return (
		<a target={target} className={classes.linkButton} href={link}>{children}</a>
	)
}